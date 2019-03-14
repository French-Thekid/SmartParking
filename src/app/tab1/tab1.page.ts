import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  filterR: any= null;
  iconColor: any = '#00FF00';
  constructor(public router: Router, public alertController: AlertController){

  }
  //Check DB Here
  temp=false;
  checkDB(){
    if(this.temp==false){
      this.iconColor= 'red';
    }
  }
 
  async filter() {
    const alert = await this.alertController.create({
      header: 'Filter View',
      cssClass: 'alertDanger',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Show All Parking Spaces',
          value: 'show_all',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Show Available Parking only',
          value: 'Show_Available'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Show Staff Parking Spaces only',
          value: 'Show_Staff'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'alertDanger',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, 
        {
          text: 'Ok',
          cssClass: 'alertDanger',
          handler: (data:string) => {
            console.log(data); 
            this.filterR=parseInt(data);
        }
        }
      ]
    });
    await alert.present();
  }
  



}
