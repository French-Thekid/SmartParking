import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFirestore, DocumentReference } from 'angularfire2/firestore';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  filterR: any = null;
  iconColor: any = '#00FF00';
  iconColor1 = 'red';
  iconColor2 = 'red';
  iconColor3 = '#7FFF00';
  iconColor4 = 'red';
  iconColor5 = 'clear';
  iconColor6 = 'red';
  iconColor7 = 'clear';
  iconColor8 = 'red';
  iconColor9 = 'clear';
  iconColor10 = 'red';
  iconColor11 = 'clear';
  iconColor12 = 'clear';
  iconColor13 = 'clear';
  iconColor14 = 'clear';
  iconColor15 = 'clear';
  iconColor16 = 'clear';
  iconColor17 = 'clear';
  iconColor18 = 'clear';
  iconColor19 = 'clear';
  iconColor20 = 'clear';
  iconColor21 = 'clear';
  iconColor22 = 'clear';
  iconColor23 = 'clear';
  iconColor24 = 'clear';
  iconColor25 = 'clear';
  iconColor26 = 'clear';
  iconColor27 = 'clear';
  iconColor28 = 'clear';
  iconColor29 = 'clear';
  iconColor30 = 'clear';
  iconColor31 = 'clear';
  iconColor32 = 'clear';
  iconColor33 = 'clear';
  iconColor34 = 'clear';
  iconColor35 = 'clear';
  iconColor36 = 'clear';
  iconColor37 = 'clear';
  iconColor38 = 'clear';
  iconColor39 = 'clear';
  iconColor40 = 'clear';
  iconColor41 = 'clear';
  iconColor42 = 'clear';
  iconColor43 = 'clear';
  iconColor44 = 'clear';
  iconColor45 = 'clear';
  iconColor46 = 'clear';
  iconColor47 = 'clear';
  iconColor48 = 'clear';
  iconColor49 = 'clear';
  iconColor50 = 'clear';
  iconColor51 = 'clear';
  iconColor52 = 'clear';
  iconColor53 = 'clear';
  iconColor54 = 'clear';
  iconColor55 = 'clear';
  iconColor56 = 'clear';
  iconColor57 = 'clear';
  iconColor58 = 'clear';
  iconColor59 = 'clear';
  iconColor60 = 'clear';
  iconColorA="white"
  iconColorNA="red"
  iconColorRE="#7FFF00"



  constructor(public router: Router, public afstore: AngularFirestore,public alertController: AlertController) {}
  //Check DB Here
  temp = false;
  checkDB() {
    if (this.temp == false) {
      this.iconColor = 'red';
    }
  }
  slideOpts = {
    effect: 'flip'
  };
  
 

  // doc = this.afstore.collection('parkingSpace');

  // var observer = doc.onSnapshot(docSnapshot => {
  //   console.log(`Received doc snapshot: ${docSnapshot}`);
  //   // ...
  // }, err => {
  //   console.log(`Encountered error: ${err}`);
  // });

}
