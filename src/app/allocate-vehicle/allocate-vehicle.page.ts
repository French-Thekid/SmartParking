import { Component, OnInit, Query } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, AlertController } from '@ionic/angular';
import { AngularFirestore, DocumentReference } from 'angularfire2/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { QRCService, qrcI } from '../services/qrcservice.service';
import { OccupiedUserService } from '../services/occupied-user.service';
import { Observable, BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { switchMap, flatMap } from 'rxjs/operators';
import { query } from '@angular/core/src/render3';
import { p_spaceI, ParkingSpaceService } from '../services/parking-space.service';

@Component({
  selector: 'app-allocate-vehicle',
  templateUrl: './allocate-vehicle.page.html',
  styleUrls: ['./allocate-vehicle.page.scss']
})
export class AllocateVehiclePage implements OnInit {
  License = '';
  userallocateid = '';
  qrcObj: qrcI;
  encodedData: string = '';
  FPrinter: boolean = false;
  query: Query;
  docRef: DocumentReference;
  spaces: Observable<any[]>;
  freeSpace: p_spaceI;
  freeSpaceID: string;



  constructor(
    private router: Router,
    public platform: Platform,
    public afstore: AngularFirestore,
    private qrcService: QRCService,
    private alertController: AlertController,
    private o_userService: OccupiedUserService,
    private p_spaceService: ParkingSpaceService
  ) { }

  ngOnInit() {
    //         console.log('Queried', spacesRef);
    // this.qrcService.getQRCS().subscribe(res => {
    //   console.log('QRC', res);
    // });
  }

  async updatePrint() {
    if (this.FPrinter == true) {
      const alert = await this.alertController.create({
        header: 'Faulty Printer Notification',
        subHeader: 'Faulty Printer Enabled',
        message: 'Allocation details will now be displayed onscreen',
        translucent: true,
        buttons: ['OK']
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Faulty Printer Notification',
        subHeader: 'Faulty Printer Disabled',
        message: 'Allocation details will no longer be displayed onscreen',
        translucent: true,
        buttons: ['OK']
      });
      await alert.present();
    }
  }






  async allocateVehicle() {
    if (this.License == '') {
      const alert = await this.alertController.create({
        header: 'Warning',
        subHeader: 'Invalid Input',
        message: 'Please enter license plate number and/or ID to continue',
        translucent: true,
        buttons: ['OK']
      });
      await alert.present();
    } else {
      // if(this.userallocateid==""){

      // }
      //else{
      //var spacesRef = this.afstore.collection("parkingSpace")
      //var query = spacesRef.where()

      //var amt = spacesRef.;

      //this.afstore.collection('parkingSpace', res => res.where('status', '==', true).limit(1));

      // var id = this.afstore.collection('parkingSpace', res => res.where('status', '==', true).limit(1)).get().subscribe(function (querySnapshot) {
      //   querySnapshot.forEach(function (doc) {
      //     console.log(doc.id, ' => ', doc.data());
      //   });
      // });





      // console.log("ID: "+id)

      //  var parkSpace = this.afstore.collection('parkingSpace');
      //  var query =  parkSpace.where('status', '==', 'true')



      // this.afstore.collection('parkingSpace').doc(this.freeSpace.parkID).update({
      //   status: false
      // })
      const snapshotResult = await this.afstore.collection('parkingSpace', ref => ref.where('status', '==', true).limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
      snapshotResult.subscribe(doc => {
        this.freeSpace = <p_spaceI>doc.payload.doc.data();
        this.docRef = doc.payload.doc.ref;
        //console.log(this.freeSpace.parkID);
        // this.freeSpace.parkID = this.freeSpaceID;
        // console.log(this.freeSpaceID);
        this.afstore.collection('parkingSpace').doc(this.freeSpace.parkID).update({
          status: false
        })

      });
      this.afstore.collection('o_users').doc(this.License).set({
        userLicNbr: this.License,
        userid: this.userallocateid,
        parkID: 'it wuk'
      });

      //var o_userRef = this.afstore.collection('o_users');
      //var query = o_userRef.where('userLicNbr', '==', '7907EM');
      //this.afstore
      //.collection('o_users')
      //.doc(this.License)
      //.set(query);
      /* this.afstore
            .collection('qrc')
            .doc('4154EM').doc('')
            .set({
              userLicNbr: userLicense,
              userid: userallocateid
            });*/
      if (this.FPrinter == true) {
        const alert = await this.alertController.create({
          header: 'On Screen Ticket',
          subHeader: 'SCIT Parking Lot',
          message: 'License Plate #:' + this.License + ' \n\n\n ', //'+this.encodedData,
          translucent: true,
          buttons: ['OK']
        });
        await alert.present();
      }
      this.License = '';
    }
  }

  //}

  back() {
    this.router.navigate(['admin-portal']);
  }
}
