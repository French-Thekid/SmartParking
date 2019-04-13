import { Component, OnInit, Query } from '@angular/core';
import { Router } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';

import { AngularFirestore, DocumentReference } from 'angularfire2/firestore';
import {
  o_userI,
  OccupiedUserService
} from '../services/occupied-user.service';
import { Observable } from 'rxjs';
import { p_spaceI } from '../services/parking-space.service';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-deallocate-vehicle',
  templateUrl: './deallocate-vehicle.page.html',
  styleUrls: ['./deallocate-vehicle.page.scss']
})
export class DeallocateVehiclePage implements OnInit {
  currentImage: any;
  scannedCode: string;
  License: string;
  o_users: o_userI[];
  query: Query;
  docRef: DocumentReference;
  users: Observable<any[]>;
  ouser: o_userI;
  ouserID: string;

  constructor(
    private qrScanner: QRScanner,
    private alertController: AlertController,
    private barcodeScanner: BarcodeScanner,
    private router: Router,
    private camera: Camera,
    private vibration: Vibration,
    public afstore: AngularFirestore,
    private o_userService: OccupiedUserService
  ) { }
  ngOnInit() {
    this.o_userService.getO_Users().subscribe(res => {
      console.log('Occupied', res);
    });
  }
  back() {
    this.router.navigate(['admin-portal']);
  }
  scanBarcode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        console.log('Barcode data', barcodeData);
        this.scannedCode = barcodeData.text;
        // this.vibration.vibrate(0.1);
        // this.popUp(this.scannedCode);

        this.vibration.vibrate(0.1);
        this.popUp(this.scannedCode);

        var snapshotResult = this.afstore.collection('o_users', ref => ref.where('userLicNbr', '==', this.scannedCode).limit(1)).snapshotChanges().pipe(flatMap(users => users));
        var subscripton = snapshotResult.subscribe(doc => {
          this.ouser = <o_userI>doc.payload.doc.data();
          this.docRef = doc.payload.doc.ref;

          subscripton.unsubscribe();
          console.log(this.ouser);

          this.afstore.collection('parkingSpace').doc(this.ouser.parkID).update({
            status: true
          });
        });

        this.afstore.collection('o_users').doc(this.scannedCode).delete();

      })
      .catch(err => {
        console.log('Error', err);
      });
  }

  deallocate() {
    this.vibration.vibrate(0.1);
    this.popUp(this.License);

    var snapshotResult = this.afstore.collection('o_users', ref => ref.where('userLicNbr', '==', this.License).limit(1)).snapshotChanges().pipe(flatMap(users => users));
    var subscripton = snapshotResult.subscribe(doc => {
      this.ouser = <o_userI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;

      subscripton.unsubscribe();
      console.log(this.ouser);
      // this.freeSpace.parkID = this.freeSpaceID;
      // console.log(this.freeSpaceID);
      this.afstore.collection('parkingSpace').doc(this.ouser.parkID).update({
        status: true
      });



    });


    this.afstore.collection('o_users').doc(this.License).delete();

  }

  async popUp(License) {
    const alert = await this.alertController.create({
      header: 'French Pop-up',
      subHeader: 'The Code Read was',
      message: 'Vehicle with License Plate #: ' + License + ' removed',
      buttons: ['OK']
    });
    await alert.present();
    this.scannedCode = ''; //resetting
    this.License = ''; //resetting
  }
}

/*
        async scanQRC(){
          this.qrScanner.prepare().then((status: QRScannerStatus) => {
            if (status.authorized) {
              // camera permission was granted
              this.popUp();


              // start scanning
              let scanSub = this.qrScanner.scan().subscribe((text: string) => {
                console.log('Scanned something', text);
                //this.scannedCode = scanSub;
                this.qrScanner.hide(); // hide camera preview
                scanSub.unsubscribe(); // stop scanning
              });

            } else if (status.denied) {
              // camera permission was permanently denied
              // you must use QRScanner.openSettings() method to guide the user to the settings page
              // then they can grant the permission from there
            } else {
              // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
          })
          .catch((e: any) => console.log('Error is', e));


        }*/
