import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { QRCService } from '../qrc.service';

@Component({
  selector: 'app-allocate-vehicle',
  templateUrl: './allocate-vehicle.page.html',
  styleUrls: ['./allocate-vehicle.page.scss']
})
export class AllocateVehiclePage implements OnInit {
  userLicNbr = '';
  userid = '';
  qrcid = '';

  constructor(
    private router: Router,
    public platform: Platform,
    public afstore: AngularFirestore,
    public qrc: QRCService
  ) {}

  ngOnInit() {}

  allocateVehicle() {
    const { userLicNbr, userid } = this;
    this.afstore.doc<any>('qrc/trialrun').set({ userLicNbr, userid });
  }

  /*const { userLicNbr, userid } = this;
    /*if(password !== cpassword) {
      return console.err("Passwords don't match")
    }
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(
        userid + '@smartpark.com',
        password
      );

      this.afstore.doc(`users/${res.user.uid}`).set({ username, userid });

      /*this.user.setUser({
        username,
        userid,
        uid: res.user.uid
      });

      this.router.navigate(['admin-portal']);
    } catch (error) {
      console.dir(error);
    }*/

  back() {
    this.router.navigate(['admin-portal']);
  }
}
