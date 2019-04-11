import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, AlertController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { QRCService, qrcI } from '../services/qrcservice.service';
import { OccupiedUserService } from '../services/occupied-user.service';

@Component({
  selector: 'app-allocate-vehicle',
  templateUrl: './allocate-vehicle.page.html',
  styleUrls: ['./allocate-vehicle.page.scss']
})
export class AllocateVehiclePage implements OnInit {
  License = '';
  userallocateid = '';
  qrcObj: qrcI;
  encodedData:string="";
  FPrinter: boolean=false;

  constructor(
    private router: Router,
    public platform: Platform,
    public afstore: AngularFirestore,
    private qrcService: QRCService,
    private alertController: AlertController,
    private o_userService: OccupiedUserService
  ) {}

  ngOnInit() {
    this.qrcService.getQRCS().subscribe(res => {
      console.log('QRC', res);
    });
  }

  async allocateVehicle() {
    this.afstore
      .collection('o_users')
      .doc(this.License)
      .set({
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
      if(this.FPrinter==true){
        const alert = await this.alertController.create({
          header: 'On Screen Ticket',
          subHeader: 'SCIT Parking Lot',
          message: "License Plate #:"+this.License+' \n\n\n '+this.encodedData,
          translucent: true,
          buttons: ['OK']
        });
        await alert.present();
      }

  }

  back() {
    this.router.navigate(['admin-portal']);
  }
}
