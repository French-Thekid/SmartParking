import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  buttonColor = '#000';
  constructor(public router: Router, public alertController: AlertController, public afstore: AngularFirestore) { }

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
    if(JSON.parse(localStorage.getItem('userID'))==null ){
      const alert = await this.alertController.create({
        header: 'Notification',
        subHeader: 'Please Register/ Login to view profile',
        buttons: ['OK']
      });
      await alert.present();
    }
    else{
      var cat:string;
      if(JSON.parse(localStorage.getItem('userID')).length==3){
          cat="Administrator";
      }
      else if(JSON.parse(localStorage.getItem('userID')).length==5){
          cat="Staff"
      }
      else if(JSON.parse(localStorage.getItem('userID')).length==7){
          cat="student"
      }
      const alert = await this.alertController.create({
        header: 'User Profile',
        message: '<strong>Name:</strong>French<br><strong>ID Number:</strong> '+JSON.parse(localStorage.getItem('userID'))+'<br><strong>Account Type:</strong>'+cat,
        translucent: true,
        buttons: [{
          text: 'Ok',
          role: 'cancel'
        },
        {
          text: 'Log Out',
          handler: data => {
            localStorage.setItem('userID',null);
            localStorage.setItem('password',null);
            this.loggedOut();
          }
        }]
      });
      await alert.present();
      }
    
  }
  async loggedOut(){
    const alert = await this.alertController.create({
      header: 'Notification',
      subHeader: 'Log-out Successful',
      buttons: ['OK']
    });
    await alert.present();
  }
}
