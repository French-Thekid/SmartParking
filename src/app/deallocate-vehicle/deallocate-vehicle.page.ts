import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-deallocate-vehicle',
  templateUrl: './deallocate-vehicle.page.html',
  styleUrls: ['./deallocate-vehicle.page.scss'],
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
            private vibration: Vibration)
            { }
        ngOnInit() {
        }
        back(){
          this.router.navigate(['admin-portal']);
        }
        scanBarcode(){
            this.barcodeScanner.scan().then(barcodeData => {
            console.log('Barcode data', barcodeData);
            this.scannedCode = barcodeData.text;
            this.vibration.vibrate(0.1);
            this.popUp(this.scannedCode); 
            //Place remove from db here with license plate # in variable this.scannedCode
           }).catch(err => {
               console.log('Error', err);
           });            
        }
        
        deallocate(){
          //Place remove from db here with license plate # in variable this.LicensePlate (same code from above)
          this.vibration.vibrate(0.1);
          this.popUp(this.License); 
        }

        async popUp(License){
          const alert = await this.alertController.create({
            header: 'French Pop-up',
            subHeader: 'The Code Read was',
            message: "Vehicle with License Plate #: "+License+" was successfully removed from system",
            buttons: ['OK']
          });
          await alert.present();
          this.scannedCode="";//resetting
          this.License="";//resetting
        }
      }