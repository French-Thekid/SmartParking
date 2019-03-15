import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserService } from '../user.service';

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
      this.router.navigate(['admin-portal']);
    } catch (err) {
      console.dir(err);
      //
      if (err.code === 'auth/user-not-found') {
        console.log('User not Found');
      }
    }
  }

  returnHome() {
    this.router.navigate(['tabs']);
  }
  register() {
    this.router.navigate(['register']);
  }
  ngOnInit() {
    //s
  }
}
