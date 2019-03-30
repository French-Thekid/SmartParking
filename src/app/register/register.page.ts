import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  username: string = '';
  userid: string = '';
  password: string = '';
  //cpassword: string = ""

  constructor(
    public router: Router,
    public afAuth: AngularFireAuth,
    public afstore: AngularFirestore,
    public user: UserService
  ) {}

  ngOnInit() {}

  async register() {
    const { username, userid, password /*cpassword*/ } = this;
    /*if(password !== cpassword) {
      return console.err("Passwords don't match")
    }*/
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
    }
  }
}
