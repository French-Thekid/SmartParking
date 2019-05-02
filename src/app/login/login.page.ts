import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserService } from '../user.service';
import { Storage } from '@ionic/storage';
import { AngularFirestore, AngularFirestoreDocument,DocumentReference } from '@angular/fire/firestore';
import { Injectable, NgZone } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { p_spaceI, ParkingSpaceService } from '../services/parking-space.service';
import { flatMap } from 'rxjs/operators';
import { query } from '@angular/core/src/render3';
import { BehaviorSubject, combineLatest, Subject, ObjectUnsubscribedError } from 'rxjs';
import {
  o_userI,
  OccupiedUserService
} from '../services/occupied-user.service';
import { user } from '../services/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  userid: string = '';
  var:string = '';
  password: string = '';
  userData: any;
  clear:String="rgba(0,0,0,0.1)";
  log:string="rgba(0,0,0,0.1)";
  docRef: DocumentReference;
  users: Observable<any[]>;
  user_: user;
  constructor(
    public router: Router,
    public afAuth: AngularFireAuth,
    public ngZone: NgZone,
    public afstore: AngularFirestore,
    private alertController: AlertController,
    private storage: Storage,
    public user: UserService
  ) {
  }
  stall(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async clearIn(){
    this.clear = "rgba(255,255,255,0.4)";
    await this.stall(100);
    this.clear = "rgba(0,0,0,0.1)";

    this.userid= "";
    this.password="";
  }

  async OpenPortal() {
    this.log = "rgba(255,255,255,0.4)";
    await this.stall(100);
    this.log = "rgba(0,0,0,0.1)";

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
        return this.afAuth.auth.signInWithEmailAndPassword( userid + '@smartpark.com', password).then((result) => {
                  this.ngZone.run(() => {
                          localStorage.setItem('userID', JSON.stringify(this.userid));
                          //localStorage.setItem('password', JSON.stringify(this.password));
                          var snapshotResult2 = this.afstore.collection('users', ref => ref.where('userid', '==', userid).limit(1)).snapshotChanges().pipe(flatMap(usernames => usernames));
                          var subscripton2 = snapshotResult2.subscribe(async doc => {
                            var user = <user>doc.payload.doc.data();
                            var docRef2 = doc.payload.doc.ref;
                            subscripton2.unsubscribe();
                            console.log("Curr Lic: "+user.license)
                            localStorage.setItem('License', JSON.stringify(user.license));
                          });
                  });
                 var SetUserData=result.user;
                if(userid.length==3){
                  this.router.navigate(['admin-portal']);
                }
                else if(userid.length==5){
                  this.router.navigate(['tabs']);
                }
                else if(userid.length==7){
                  this.router.navigate(['tabs']);
                }

                this.stall(7000);
                this.userid=''
                this.password=''

            }).catch((err) => {
           console.log(err.message)
           console.log("Code: "+err.code)
           if (err.code === 'auth/wrong-password') {
            console.log('Invalid');
            this.logFail();
           }
           if(err.code="auth/user-not-found"){
             this.logFail1();
           }
        })

        this.userid="";
        this.password="";
      } catch (err) {
        console.dir(err);
        console.log("Code1: "+err.code)
        if (err.code === 'auth/wrong-password') {
          this.logFail();
        }
        if(err.code="auth/user-not-found"){
          this.logFail1();
        }
      }
    }
  }
  async logFail(){
    const alert = await this.alertController.create({
      header: 'Warning',
      subHeader: 'Invalid Username/Password',
      message: "Please Check credentials and try again",
      translucent: true,
      buttons: ['OK']
    });
    await alert.present();
  }
  async logFail1(){
    const alert = await this.alertController.create({
      header: 'Warning',
      subHeader: 'User Not Found',
      message: "Please Check credentials and try again",
      translucent: true,
      buttons: ['OK']
    });
    await alert.present();
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
