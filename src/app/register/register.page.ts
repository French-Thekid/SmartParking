import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  username: string = '';
  userid: string = '';
  password: string = '';
  password1: string = ""

  constructor(
    public router: Router,
    public afAuth: AngularFireAuth,
    public afstore: AngularFirestore,
    private alertController: AlertController,
    public user: UserService
  ) {}

  ngOnInit() {}

  async register() {
    const { username, userid, password /*cpassword*/ } = this;
    /*if(password !== cpassword) {
      return console.err("Passwords don't match")
    }*/
    if((this.username=="")||(this.userid=="")||(this.password=="")||(this.password1=="")){
        const alert = await this.alertController.create({
          header: 'Warning',
          subHeader: 'Incomplete Form',
          message: "Please Check to ensure all fields are filled",
          translucent: true,
          buttons: ['OK']
        });
        await alert.present();
    }
    else{
      if(this.password!=this.password1){
        const alert = await this.alertController.create({
          header: 'Warning',
          subHeader: 'Passwords do not match',
          message: "Please ensure both password match",
          translucent: true,
          buttons: ['OK']
        });
        await alert.present();
      }
      else{
        try {
          const res = await this.afAuth.auth.createUserWithEmailAndPassword(
            userid + '@smartpark.com',
            password
          );
    
          this.afstore.doc(`users/${res.user.uid}`).set({ username, userid });
    
          this.user.setUser({
            username,
            userid,
            uid: res.user.uid
          });
    
          this.router.navigate(['admin-portal']);
        } catch (error) {
            console.dir(error);
            if(error.code === 'auth/weak-password'){
              const alert = await this.alertController.create({
                header: 'Warning',
                subHeader: 'Invalid Password',
                message: "Please enter a stronger password",
                translucent: true,
                buttons: ['OK']
              });
              await alert.present();
            }
        }
      }
      
    }
   
  }
}
