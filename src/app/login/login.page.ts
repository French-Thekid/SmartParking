import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserService } from '../user.service';
import { Storage } from '@ionic/storage';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  userid: string = '';
  var:string = '';
  password: string = '';

  constructor(
    public router: Router,
    public afAuth: AngularFireAuth,
    private alertController: AlertController,
    private storage: Storage,
    public user: UserService
  ) {}

  async OpenPortal() {
    const { userid, password } = this;
    if((this.userid=="")||(this.password==""))
    {
      const alert = await this.alertController.create({
        header: 'Warning',
        subHeader: 'Invalid Credentials',
        message: "Please enter valid credentials to login",
        translucent: true,
        buttons: ['OK']
      });
      await alert.present();
    }
    else{
      try {
        const res = await this.afAuth.auth.signInWithEmailAndPassword(
          userid + '@smartpark.com',
          password
        );
          //return this.OpenPortal().updateUserData(res.user);
        if(userid.length==3){
          //admin portal link
        }
        else if(userid.length==5){
          //staff/home portal link
          this.storage.set('userID', this.userid);
        }
        else if(userid.length==7){
           //student/home portal link
           this.storage.set('userID', this.userid);
        }
       // var idR=this.getUID();
       

        // const alert = await this.alertController.create({
        //   header: 'Warning',
        //   subHeader: 'Testing',
        //   message: "Username: "+idR,
        //   translucent: true,
        //   buttons: ['OK']
        // });
        // await alert.present();
        //this.router.navigate(['admin-portal']);

        this.userid="";
        this.password="";
      } catch (err) {
        console.dir(err);
        if (err.code === 'auth/user-not-found') {
          console.log('User not Found');
          const alert = await this.alertController.create({
            header: 'Warning',
            subHeader: 'User Not Found',
            message: "Please Check credentials and try again",
            translucent: true,
            buttons: ['OK']
          });
          await alert.present();
        }
      }
    
    }
    
  }

  returnHome() {
    this.router.navigate(['tabs']);
    this.userid="";
    this.password="";
  }
  register() {
    this.router.navigate(['register']);
    this.userid="";
    this.password="";
  }
  ngOnInit() {
    //
  }

  getUID()
  {
    var x= this.storage.get('userID');
    var y=Promise.all([x]).then((arrayOfResults) => {
      console.log(arrayOfResults[0]);
      return arrayOfResults[0];
    });
    return y;
  }
}
