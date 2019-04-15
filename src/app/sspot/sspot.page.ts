import { Component, OnInit, Query } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFirestore, DocumentReference } from 'angularfire2/firestore';
import { flatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { o_userI } from '../services/occupied-user.service';
import { p_spaceI } from '../services/parking-space.service';

@Component({
  selector: 'app-sspot',
  templateUrl: './sspot.page.html',
  styleUrls: ['./sspot.page.scss']
})
export class SspotPage implements OnInit {
  query: Query;
  docRef: DocumentReference;
  spaces: Observable<any[]>;
  s_space: p_spaceI;

  docRef1: DocumentReference;
  spaces1: Observable<any[]>;
  s_space1: p_spaceI;


  selectedSpot: string;
  SbuttonColor = 'clear';
  iconColorA = "white"
  iconColorNA = "red"
  iconColorRE = "#7FFF00"
  iconColor1 = 'white';
  iconColor2 = 'white';
  iconColor3 = 'white';
  iconColor4 = 'white';
  iconColor5 = 'white';
  iconColor6 = 'white';
  iconColor7 = 'white';
  iconColor8 = 'white';
  iconColor9 = 'white';
  iconColor10 = 'white';
  iconColor11 = 'white';
  iconColor12 = 'white';
  iconColor13 = 'white';
  iconColor14 = 'white';
  iconColor15 = 'white';
  iconColor16 = 'white';
  iconColor17 = 'white';
  iconColor18 = 'white';
  iconColor19 = 'white';
  iconColor20 = 'white';
  iconColor21 = 'white';
  iconColor22 = 'white';
  iconColor23 = 'white';
  iconColor24 = 'white';
  iconColor25 = 'white';
  iconColor26 = 'white';
  iconColor27 = 'white';
  iconColor28 = 'white';
  iconColor29 = 'white';
  iconColor30 = 'white';
  iconColor31 = 'white';
  iconColor32 = 'white';
  iconColor33 = 'white';
  iconColor34 = 'white';
  iconColor35 = 'white';
  iconColor36 = 'white';
  iconColor37 = 'white';
  iconColor38 = 'white';
  iconColor39 = 'white';
  iconColor40 = 'white';
  iconColor41 = 'white';
  iconColor42 = 'white';
  iconColor43 = 'white';
  iconColor44 = 'white';
  iconColor45 = 'white';
  iconColor46 = 'white';
  iconColor47 = 'white';
  iconColor48 = 'white';
  iconColor49 = 'white';
  iconColor50 = 'white';
  iconColor51 = 'white';
  iconColor52 = 'white';
  iconColor53 = 'white';
  iconColor54 = 'white';
  iconColor55 = 'white';
  iconColor56 = 'white';
  iconColor57 = 'white';
  iconColor58 = 'white';
  iconColor59 = 'white';
  iconColor60 = 'white';

  constructor(
    private router: Router,
    private alertController: AlertController,
    public afstore: AngularFirestore
  ) { }

  ngOnInit() { }
  return() {
    this.router.navigate(['/tabs/tab3']);
  }

  async returnSpot(spot: string) {
    this.selectedSpot = spot;
    if ((parseInt(this.selectedSpot) <= 20) && (JSON.parse(localStorage.getItem('userID')).length != 5)) {
      const alert = await this.alertController.create({
        header: 'Warning',
        subHeader: 'Invalid Spot Selected',
        message: 'It appears the spot you have selected is reserved for Staff members only, please try selecting another',
        translucent: true,
        buttons: ['OK']
      });
      await alert.present();
    }
    else {
      localStorage.setItem('sspot', JSON.stringify(this.selectedSpot));


      // var snapshotResult = this.afstore.collection('parkingSpace', ref => ref.where('spaceNbr', '==', spot).where('status', '==', true).limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
      // var subscripton = snapshotResult.subscribe(doc => {
      //   this.s_space = <p_spaceI>doc.payload.doc.data();
      //   this.docRef = doc.payload.doc.ref;

      //   subscripton.unsubscribe();
      //   console.log(this.s_space);

      //   this.afstore.collection('parkingSpace').doc(this.s_space.parkID).update({
      //     reserved: true
      //   });

      // });



      // const alert = await this.alertController.create({
      //   header: 'French Pop-up',
      //   subHeader: 'Under Construction',
      //   message: 'Parking lot ' + spot + ' selected',
      //   translucent: true,
      //   buttons: ['OK']
      // });

      // await alert.present();
      this.router.navigate(['/tabs/tab3']);
    }
  }
}
