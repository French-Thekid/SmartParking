import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserService } from '../user.service';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  userid: string = '';
  password: string = '';

  constructor(
    public router: Router,
    public afAuth: AngularFireAuth,
    public user: UserService
  ) {}

  async OpenPortal() {
    const { userid, password } = this;
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
      }
      else if(userid.length==7){
         //student/home portal link
      }
      this.router.navigate(['admin-portal']);
    } catch (err) {
      console.dir(err);
      if (err.code === 'auth/user-not-found') {
        console.log('User not Found');
      }
    }
    this.userid="";
    this.password="";
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
}
