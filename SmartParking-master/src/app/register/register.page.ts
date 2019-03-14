import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  username: string = '';
  password: string = '';
  //cpassword: string = ""

  constructor(private router: Router, public afAuth: AngularFireAuth) {}

  ngOnInit() {}
  back() {
    this.router.navigate(['login']);
  }
  register() {
    this.router.navigate(['login']);
    //
    //
    let say = true;
  }
}
