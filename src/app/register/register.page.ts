import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
//import { AngularFirestore } from 'angularfire2/firestore';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  constructor(
    private router: Router //private afstore: AngularFirestore,
  ) //private afAuth: AngularFireAuth
  //private user: UserService
  {}
  /*username: string = '';
  userid: string = '';
  password: string = '';
*/
  ngOnInit() {}

  back() {
    this.router.navigate(['login']);
  }

  /*async register() {
    const { username, userid, password } = this;
    
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
  }*/
}
