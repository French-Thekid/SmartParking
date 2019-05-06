import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  constructor(private router: Router,public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  Darryl(){
    this.router.navigate(['darryl'])
  }
  Christina(){
    this.router.navigate(['christina'])
  }
  Welsh(){
    this.router.navigate(['welsh'])
  }
  Odane(){
    this.router.navigate(['odane'])
  }

}