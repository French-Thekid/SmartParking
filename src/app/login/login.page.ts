import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';
  logS: string = "rgba(0,0,0,0)";
  regS: string = "rgba(0,0,0,0)";
  constructor(public router: Router, public afAuth: AngularFireAuth, public alertController: AlertController) {}
  
  async OpenPortal() {
    this.logS = "rgba(255,255,255,0.4)";
    const { username, password } = this;
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(
        username + '@smartpark.com',
        password
      );
      this.router.navigate(['admin-portal']);
      this.username= '';
      this.password = '';
      await this.stall(100);
      this.logS = "rgba(0,0,0,0)";
    } catch (err) {
      const alert = await this.alertController.create({
        header: 'French Pop-up',
        subHeader: 'User Not Found',
        message: 'Please Check Login Credentials.',
        translucent: true,
        buttons: ['OK']
      });
      await alert.present();

      console.dir(err);
      if (err.code === 'auth/user-not-found') {
        console.log('User not Found');
      }
      await this.stall(0.1);
      this.logS = "rgba(0,0,0,0)";
    }
  }
  async clear(){
    this.regS = "rgba(255,255,255,0.4)";
    this.username= '';
    this.password = '';
    await this.stall(100);
    this.regS = "rgba(0,0,0,0)";
  }
  returnHome() {
    this.router.navigate(['tabs']);
  }
  async registerP() {
    this.router.navigate(['register']);
  }

  stall(ms: number){
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  ngOnInit() {
    //s
  }
}
