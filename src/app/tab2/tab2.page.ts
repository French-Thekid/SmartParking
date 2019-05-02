import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFirestore, DocumentReference } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { user } from '../services/user.model';
import { flatMap } from 'rxjs/operators';
import { async } from 'q';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  docRef2: DocumentReference;
  usernames: Observable<any[]>;
  user: user;
  logged="Log Out";
  buttonColor = '#000';
  constructor(public router: Router, public alertController: AlertController, public afstore: AngularFirestore) { 
    console.log('Main')
    if (JSON.parse(localStorage.getItem('userID')) == null) {
      this.logged="Log In";
    }
    else{
      this.logged="Log Out";
    }
  
  }
  ngOnInit() { 
  }
  async OpenLogin() {
    this.buttonColor = '#000080';
    var IDChk = JSON.parse(localStorage.getItem('userID'));
    if (IDChk != null) {
      const alert = await this.alertController.create({
        header: 'Confirm!',
        message: "<strong>Already signed in under user ID:" + JSON.parse(localStorage.getItem('userID')) + "</strong>, would you like to log-out and log in as someone else?",
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
              localStorage.setItem('userID', null);
              localStorage.setItem('password', null);
              this.router.navigate(['login']);
              this.logged="Log In";
              if (JSON.parse(localStorage.getItem('userID')) == null) {
                this.logged="Log In";
              }
              else{
                this.logged="Log Out";
              }   
            }
          }
        ]
      });
      await alert.present();
    } else {
      this.router.navigate(['login']);
    }
  }
  // ionViewDidLoad(){
  //   console.log("fucker");
  //   if (JSON.parse(localStorage.getItem('userID')) == null) {
  //     this.logged="Log In";
  //   }
  //   else{
  //     this.logged="Log Out";
  //   }   
  // }
  ionViewWillEnter(){
    console.log("fucker");
    if (JSON.parse(localStorage.getItem('userID')) == null) {
      this.logged="Log In";
    }
    else{
      this.logged="Log Out";
    } 
  }
  async openProfile() {

    if (JSON.parse(localStorage.getItem('userID')) == null) {
      const alert = await this.alertController.create({
        header: 'Notification',
        subHeader: 'Please Register/ Login to view profile',
        buttons: ['OK']
      });
      await alert.present();
    }
    else {
      var snapshotResult2 = this.afstore.collection('users', ref => ref.where('userid', '==', JSON.parse(localStorage.getItem('userID'))).limit(1)).snapshotChanges().pipe(flatMap(usernames => usernames));
      var subscripton2 = snapshotResult2.subscribe(async doc => {
        this.user = <user>doc.payload.doc.data();
        this.docRef2 = doc.payload.doc.ref;



        subscripton2.unsubscribe();

        var cat: string;
        if (JSON.parse(localStorage.getItem('userID')).length == 3) {
          cat = "Administrator";
        }
        else if (JSON.parse(localStorage.getItem('userID')).length == 5) {
          cat = "Staff"
        }
        else if (JSON.parse(localStorage.getItem('userID')).length == 7) {
          cat = "Student"
        }
        const alert = await this.alertController.create({
          header: 'User Profile',
          message: '<strong>Name:</strong>' + this.user.username + '<br><strong>ID Number:</strong>' + this.user.userid + '<br><strong>Account Type:</strong>' + cat +'<br><strong>Email:</strong>' + this.user.email +'<br><strong>Department:</strong>' + this.user.department +'<br><strong>License #:</strong>' + this.user.license,
          translucent: true,
          buttons: [{
            text: 'Ok',
            role: 'cancel'
          },

          {
            text: 'Log Out',
            handler: data => {
              localStorage.setItem('userID', null);
              localStorage.setItem('password', null);
              this.loggedOut();
              this.logged="Log In";
              if (JSON.parse(localStorage.getItem('userID')) == null) {
                this.logged="Log In";
              }
              else{
                this.logged="Log Out";
              }     
            }
          }]

        });
        await alert.present();
      });
    }

  }

  async loggedOut() {
    const alert = await this.alertController.create({
      header: 'Notification',
      subHeader: 'Log-out Successful',
      buttons: ['OK']
    });
    await alert.present();
  }
}
