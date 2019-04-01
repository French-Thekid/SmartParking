import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController, Platform,ToastController } from '@ionic/angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
//import { HistoryProvider } from '../../providers/history/history';

@Component({
  selector: 'app-deallocate-vehicle',
  templateUrl: './deallocate-vehicle.page.html',
  styleUrls: ['./deallocate-vehicle.page.scss'],
})
export class DeallocateVehiclePage implements OnInit {
        currentImage: any;
        scannedCode: string;
        License: string;
        //options:BarcodeScannerOptions;
        
        constructor(
            private qrScanner: QRScanner, 
            private alertController: AlertController, 
            private barcodeScanner: BarcodeScanner,  
            private router: Router, 
            private platform: Platform,
            private camera: Camera,
            //private _history: HistoryProvider,
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
        scan(){
            if(!this.platform.is('cordova')){
              // this._history.addItemToHistory("geo:41.41185880151618,2.2171281293975653");
              // this._history.addItemToHistory("http://www.google.es");
              //this._history.addItemToHistory( `BEGIN:VCARD
              // VERSION:2.1
              // N:Kent;Clark
              // FN:Clark Kent
              // ORG:
              // TEL;HOME;VOICE:12345
              // TEL;TYPE=cell:67890
              // ADR;TYPE=work:;;;
              // EMAIL:clark@superman.com
              // END:VCARD` );
              // this._history.addItemToHistory("MATMSG:TO:snak_one@hotmail.com;SUB:Ionic;BODY:QR Test;;");
              return false;
            }
            this.barcodeScanner.scan().then(barcodeData => {
                console.log('Barcode data' + JSON.stringify(barcodeData));
                if (barcodeData.cancelled == false && barcodeData.text != null){
                  this.scannedCode = barcodeData.text;
                  this.vibration.vibrate(0.1);
                  this.popUp(this.scannedCode); 
                }
              }).catch(err => {
                 console.log('Error', err);
              });
            }
          /*
          if (!this.platform.is('cordova')){
                // this._history.addItemToHistory("geo:41.41185880151618,2.2171281293975653");
                // this._history.addItemToHistory("http://www.google.es");
                this._history.addItemToHistory( `BEGIN:VCARD
                VERSION:2.1
                N:Kent;Clark
                FN:Clark Kent
                ORG:
                TEL;HOME;VOICE:12345
                TEL;TYPE=cell:67890
                ADR;TYPE=work:;;;
                EMAIL:clark@superman.com
                END:VCARD` );
                // this._history.addItemToHistory("MATMSG:TO:snak_one@hotmail.com;SUB:Ionic;BODY:QR Test;;");
                return false;
              }

              this.barcodeScanner.scan().then(barcodeData => {
              console.log('Barcode data' + JSON.stringify(barcodeData));
              if (barcodeData.cancelled == false && barcodeData.text != null){
                this._history.addItemToHistory(barcodeData.text);

              }
              }).catch(err => {
                  this.showError("Error: " + err)
              });
            }
          */
          
       // }
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