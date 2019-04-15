import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  buttonColor = '#000';
  constructor(public router: Router, public alertController: AlertController) { }

  async OpenLogin() {
    this.buttonColor = '#000080';
    var IDChk = JSON.parse(localStorage.getItem('userID'));
    if (IDChk != null) {
      const alert = await this.alertController.create({
        header: 'Confirm!',
        message: "<strong>Already signed in under user ID:" + JSON.parse(localStorage.getItem('userID')) + "</strong>, would you like to log-out and log in as somewone else?",
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Yes',
            handler: () => {
              console.log('Confirm Okay');
              localStorage.setItem('userID',null);
              localStorage.setItem('password',null);
              this.router.navigate(['login']);
            }
          }
        ]
      });
      await alert.present();
    } else {
      this.router.navigate(['login']);
    }
  }

  async openProfile() {
    const alert = await this.alertController.create({
      header: 'French Pop-up',
      subHeader: 'Under Construction',
      message: 'This section will be up soon fam. Logged in as: ' + JSON.parse(localStorage.getItem('userID')),
      translucent: true,
      buttons: ['OK']
    });

    await alert.present();
  }
}
