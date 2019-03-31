import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { OccupiedUserService } from '../occupied_users.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-deallocate-vehicle',
  templateUrl: './deallocate-vehicle.page.html',
  styleUrls: ['./deallocate-vehicle.page.scss']
})
export class DeallocateVehiclePage implements OnInit {
  currentImage: any;
  scannedCode: string;
  License: string;

  constructor(
    private qrScanner: QRScanner,
    private alertController: AlertController,
    private barcodeScanner: BarcodeScanner,
    private router: Router,
    private camera: Camera,
    private vibration: Vibration,
    public afstore: AngularFirestore,
    public o_users: OccupiedUserService
  ) {}
  ngOnInit() {}
  back() {
    this.router.navigate(['admin-portal']);
  }
  scanBarcode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        console.log('Barcode data', barcodeData);
        this.scannedCode = barcodeData.text;
        this.vibration.vibrate(0.1);
        this.popUp(this.scannedCode);
        //Place remove from db here with license plate # in variable this.scannedCode
      })
      .catch(err => {
        console.log('Error', err);
      });
  }

  deallocate() {
    //this.o_users.removeO_Users(this.License);

    this.vibration.vibrate(0.1);
    this.popUp(this.License);
  }

  async popUp(License) {
    const alert = await this.alertController.create({
      header: 'French Pop-up',
      subHeader: 'The Code Read was',
      message:
        'Vehicle with License Plate #: ' +
        License +
        ' was successfully removed from system',
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
