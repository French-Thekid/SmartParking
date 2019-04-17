import { Component, Query } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFirestore, DocumentReference, DocumentSnapshot } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { p_spaceI, ParkingSpaceService } from '../services/parking-space.service';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  query: Query;
  docRef: DocumentReference;
  spaces: Observable<any[]>;
  s_space: p_spaceI;
  filterR: any = null;
  p_SpaceService: ParkingSpaceService;
  space: p_spaceI;
  docs: DocumentSnapshot<p_spaceI>;


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
  iconColorA = "white"
  iconColorNA = "red"
  iconColorRE = "#7FFF00"
  iconColorvar = 'clear';



  constructor(public router: Router, public afstore: AngularFirestore, public alertController: AlertController) {
    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP01').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor1 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor1 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor1 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor1 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP03').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor3 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor3 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor3 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor3 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP05').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor5 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor5 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor5 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor5 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP07').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor7 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor7 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor7 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor7 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP09').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor9 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor9 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor9 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor9 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP11').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor11 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor11 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor11 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor11 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP12').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor12 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor12 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor12 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor12 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP13').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor13 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor13 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor13 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor13 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP14').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor14 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor14 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor14 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor14 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP15').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor15 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor15 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor15 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor15 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP16').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor16 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor16 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor16 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor16 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP17').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor17 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor17 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor17 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor17 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP18').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor18 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor18 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor18 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor18 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP19').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor19 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor19 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor19 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor19 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP20').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor20 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor20 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor20 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor20 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP21').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor21 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor21 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor21 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor21 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP22').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor22 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor22 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor22 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor22 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP23').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor23 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor23 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor23 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor23 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP24').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor24 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor24 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor24 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor24 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP25').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor25 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor25 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor25 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor25 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP26').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor26 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor26 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor26 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor26 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP27').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor27 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor27 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor27 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor27 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    // for (let i = 1; i < 61; i++) {
    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP28').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor28 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor28 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor28 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor28 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });



    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP29').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor29 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor29 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor29 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor29 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP30').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor30 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor30 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor30 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor30 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP31').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor31 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor31 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor31 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor31 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP32').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor32 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor32 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor32 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor32 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP33').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor33 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor33 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor33 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor33 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP34').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor34 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor34 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor34 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor34 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP35').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor35 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor35 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor35 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor35 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP36').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor36 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor36 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor36 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor36 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP37').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor37 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor37 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor37 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor37 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP38').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor38 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor38 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor38 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor38 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP39').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor39 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor39 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor39 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor39 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP40').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor40 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor40 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor40 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor40 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP41').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor41 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor41 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor41 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor41 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP42').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor42 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor42 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor42 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor42 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP43').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor43 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor43 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor43 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor43 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP44').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor44 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor44 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor44 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor44 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP45').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor45 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor45 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor45 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor45 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP46').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor46 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor46 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor46 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor46 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP47').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor47 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor47 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor47 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor47 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP48').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor48 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor48 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor48 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor48 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP49').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor49 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor49 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor49 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor49 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP50').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor50 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor50 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor50 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor50 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP51').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor51 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor51 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor51 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor51 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP52').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor52 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor52 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor52 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor52 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP53').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor53 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor53 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor53 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor53 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP54').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor54 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor54 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor54 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor54 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP55').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor55 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor55 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor55 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor55 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP56').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor56 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor56 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor56 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor56 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP57').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor57 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor57 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor57 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor57 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP58').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor58 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor58 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor58 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor58 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP59').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor59 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor59 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor59 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor59 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP60').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColor60 = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColor60 = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColor60 = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColor60 = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });

    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '==', 'GP61').limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space = <p_spaceI>doc.payload.doc.data();
      this.docRef = doc.payload.doc.ref;
      if (this.s_space.reserved == true) {
        this.iconColorvar = '#7FFF00';
      } else if (this.s_space.reserved == false) {
        this.iconColorvar = 'clear';
      }
      if (this.s_space.status == false) {
        this.iconColorvar = 'red';
      }
      if (this.s_space.status == true && this.s_space.reserved == false) {
        this.iconColorvar = 'white';
        console.log('yea');
      }
      console.log(this.s_space);
      subscripton1.unsubscribe();
    });


  }
  //Check DB Here
  temp = false;
  checkDB() {


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
