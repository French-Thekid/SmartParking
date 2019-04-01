import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { QRCService, qrcI } from '../services/qrcservice.service';
import { OccupiedUserService } from '../services/occupied-user.service';

@Component({
  selector: 'app-allocate-vehicle',
  templateUrl: './allocate-vehicle.page.html',
  styleUrls: ['./allocate-vehicle.page.scss']
})
export class AllocateVehiclePage implements OnInit {
  userLicense = '';
  userallocateid = '';
  qrcObj: qrcI;

  constructor(
    private router: Router,
    public platform: Platform,
    public afstore: AngularFirestore,
    private qrcService: QRCService,
    private o_userService: OccupiedUserService
  ) {}

  ngOnInit() {
    this.qrcService.getQRCS().subscribe(res => {
      console.log('QRC', res);
    });
  }

  async allocateVehicle() {
    const { userallocateid, userLicense } = this;
    this.qrcObj = {
      userLicNbr: userLicense,
      userid: userallocateid
    };
    this.qrcService.addQRC(this.qrcObj);

    /* this.afstore
      .collection('qrc')
      .doc('4154EM').doc('')
      .set({
        userLicNbr: userLicense,
        userid: userallocateid
      });*/
  }

  back() {
    this.router.navigate(['admin-portal']);
  }
}
