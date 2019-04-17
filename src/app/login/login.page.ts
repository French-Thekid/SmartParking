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
    // this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //       this.userData = user;
    //       localStorage.setItem('userID', JSON.stringify(this.userid));
    //       localStorage.setItem('password', JSON.stringify(this.password));
    //       JSON.parse(localStorage.getItem('userID'));
    //       JSON.parse(localStorage.getItem('password'));
    //   } 
    //   else {
    //       localStorage.setItem('userID', null);
    //       localStorage.setItem('password', null);
    //       JSON.parse(localStorage.getItem('userID'));
    //       JSON.parse(localStorage.getItem('password'));
    //   }
    //   })


  }

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

        return this.afAuth.auth.signInWithEmailAndPassword( userid + '@smartpark.com', password).then((result) => {
                  this.ngZone.run(() => {
                          localStorage.setItem('userID', JSON.stringify(this.userid));
                          //localStorage.setItem('password', JSON.stringify(this.password));
                          // var snapshotResult = this.afstore.collection('user', ref => ref.where('userid', '==', JSON.parse(localStorage.getItem('userID'))).limit(1)).snapshotChanges().pipe(flatMap(users => users));
                          // var subscripton = snapshotResult.subscribe(doc => {
                          // this.user_ = <user>doc.payload.doc.data();
                          // this.docRef = doc.payload.doc.ref;

                          //   subscripton.unsubscribe();
                          //   console.log(this.user_);
                          //   localStorage.setItem('uname', this.user_.username);
                          //   console.log('name' + JSON.parse(localStorage.getItem('uname')));

                          // });
                          if(userid.length==3){
                            this.router.navigate(['admin-portal']);
                          }
                          else if(userid.length==5){
                            this.router.navigate(['tabs']);
                          }
                          else if(userid.length==7){
                            this.router.navigate(['tabs']);
                          }   
                  });
                 var SetUserData=result.user;

            }).catch((error) => {
           console.log(error.message)
        })

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
          //this.storage.set('userID', this.userid);
        }
        else if(userid.length==7){
           //student/home portal link
          // this.storage.set('userID', this.userid);
        }

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
