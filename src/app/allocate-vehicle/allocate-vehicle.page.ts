import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-allocate-vehicle',
  templateUrl: './allocate-vehicle.page.html',
  styleUrls: ['./allocate-vehicle.page.scss'],
})
export class AllocateVehiclePage implements OnInit {
  FPrinter:boolean = false;
  license: string;
  encodedData:any;
  constructor(private router: Router, private barcodeScanner: BarcodeScanner,public alertController: AlertController,public platform: Platform) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['admin-portal']);
  }
  async updatePrint(){
    if(this.FPrinter==true)
    {
      const alert = await this.alertController.create({
        header: 'Notification Center',
        subHeader: 'Faulty Printer Notification',
        message: 'Faulty Printer setting enabled.',
        translucent: true,
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  async allocate(){
      this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.license).then((license) => {
      console.log(this.license);
      this.encodedData = JSON.stringify(license);
    }, (err) => {
      console.log("Error occured : " + err);
    });
   
    if(this.FPrinter==true){
      const alert = await this.alertController.create({
        header: 'On Screen Ticket',
        subHeader: 'SCIT Parking Lot',
        message: "License Plate #:"+this.license+' \n\n\n '+this.encodedData,
        translucent: true,
        buttons: ['OK']
      });
      await alert.present();
    }
  }

}
