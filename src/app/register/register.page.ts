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
  password1: string = "";
  ErrChk: number = 0;
  email: string = "";
  department: string = "";
  license: string = "";
  clear:String="rgba(0,0,0,0.1)";
  log:string="rgba(0,0,0,0.1)";

  constructor(
    public router: Router,
    public afAuth: AngularFireAuth,
    public afstore: AngularFirestore,
    private alertController: AlertController,
    public user: UserService
  ) { }

  ngOnInit() { }

  back(){
    this.router.navigate(['tabs']);
  }

  stall(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async clearIn(){
    this.clear = "rgba(255,255,255,0.4)";
    await this.stall(100);
    this.clear = "rgba(0,0,0,0.1)";
    this.email="";
    this.department="";
    this.license="";
    this.userid= "";
    this.password="";
    this.username="";
    this.password1="";

  }
  async register() {
    this.log = "rgba(255,255,255,0.4)";
    await this.stall(100);
    this.log = "rgba(0,0,0,0.1)";
    const { username, userid, password,license,department,email /*cpassword*/ } = this;
    /*if(password !== cpassword) {
      return console.err("Passwords don't match")
    }*/
    if ((this.username == "") || (this.userid == "") || (this.password == "") || (this.password1 == "") || (this.email == "") || (this.department == "") || (this.license == "")) {
      const alert = await this.alertController.create({
        header: 'Warning',
        subHeader: 'Incomplete Form',
        message: "Please Check to ensure all fields are filled",
        translucent: true,
        buttons: ['OK']
      });
      await alert.present();
    }
    else {
      
      if (this.password != this.password1) {
        const alert = await this.alertController.create({
          header: 'Warning',
          subHeader: 'Passwords do not match',
          message: "Please ensure both password match",
          translucent: true,
          buttons: ['OK']
        });
        await alert.present();
      }
      else {
        try {
            var EChk=this.email.split('@');
            var b=EChk[1];
            var d=null;
            var c=null;
            var inC = true;
            if((b==undefined)||(b==null))
            {
              inC = false;
            }
            else{
              c = b.split('.');
              if((c[1]==undefined)||(c[1]==null))
              {
                inC = false;
              }
              else{
                var c1=c[1];
                d = c1[1];
              }
              
            }
            if((d==undefined)||(inC==false)){
              const alert = await this.alertController.create({
                header: 'Warning',
                subHeader: 'Invalid Email Address',
                message: "Please check and re-enter email address again",
                translucent: true,
                buttons: ['OK']
              });
              await alert.present();
              console.log("Invalid Email");
              this.ErrChk++;
            }
            else{
                  const res = await this.afAuth.auth.createUserWithEmailAndPassword(userid + '@smartpark.com', password);

                  // this.afstore.doc(`users/${res.user.uid}`).set({ username, userid });
                  this.afstore.collection('users').doc(userid).set({ username, userid,email,department,license });

                  this.user.setUser({
                    username,
                    userid,
                    uid: res.user.uid,
                    license,
                    department,
                    email
                  });

                  this.router.navigate(['login']);
            }
        } catch (error) {
          console.dir(error);
          if (error.code === 'auth/weak-password') {
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
