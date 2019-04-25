import { Component, Query } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore, DocumentReference, DocumentChangeAction } from 'angularfire2/firestore';
import { p_spaceI, ParkingSpaceService } from '../services/parking-space.service';
import { switchMap, flatMap } from 'rxjs/operators';
import { Observable, BehaviorSubject, combineLatest, Subject, ObjectUnsubscribedError } from 'rxjs';
import {
  o_userI,
  OccupiedUserService
} from '../services/occupied-user.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(public alertController: AlertController, public afstore: AngularFirestore, public router: Router) { }
  time = 5;
  check: boolean = false;
  check1: boolean = false;
  booked: boolean = false;
  buttonColor:string="#000080"
  buttonColor1:string="#000080"
  buttonColor2:string="#000080"
  intervalVar: any;
  o_users: o_userI[];
  reservedSpace: p_spaceI;
  ouser: o_userI;
  ouserID: string;
  sec = 0;
  min = 0;

  query: Query;
  docRef: DocumentReference;
  spaces: Observable<any[]>;
  s_space: p_spaceI;

  query1: Query;
  docRef1: DocumentReference;
  spaces1: DocumentChangeAction<{}>[];
  s_space1: p_spaceI;

  stall(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async reserveSpot() {
    this.buttonColor2="rgba(255,255,255,0.4)";
    await this.stall(100);
    this.buttonColor2 = "#000080";

    if (this.booked == true) {
      const alert = await this.alertController.create({
        header: 'Reservation Found!',
        message: "You have already made a reservation, would you like to cancel and make a new one?",
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Yes',
            handler: () => {
              //cancel current reservation
              this.sec = 0;
              this.min = 0;
              clearInterval(this.intervalVar);
              var spot = 'GP' + JSON.parse(localStorage.getItem('sspot'));
              this.afstore.collection('parkingSpace').doc(spot).update({
                reserved: false
              });
              this.afstore.collection('reservation').doc(spot).delete();

              console.log('new reservation selected');
              this.booked = false;
            }
          }
        ]
      });
      await alert.present();
    }
    else {
      var IDChk = JSON.parse(localStorage.getItem('userID'));
      if (IDChk == null) {
        const alert = await this.alertController.create({
          header: 'Unknown User',
          subHeader: 'Please Log-in to Continue.',
          buttons: ['OK']
        });
        await alert.present();
      }
      else {
        if ((this.check1 == true) && (this.check == true)) {

          var snapshotResult = this.afstore.collection('parkingSpace', ref => ref.where('spaceNbr', '==', JSON.parse(localStorage.getItem('sspot'))).where('status', '==', true).where('reserved', '==', false).limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
          var subscripton = snapshotResult.subscribe(doc => {
            this.s_space = <p_spaceI>doc.payload.doc.data();
            this.docRef = doc.payload.doc.ref;

            subscripton.unsubscribe();
            console.log(this.s_space);

            this.afstore.collection('parkingSpace').doc(this.s_space.parkID).update({
              reserved: true
            });

            this.afstore.collection('reservation').doc(this.s_space.parkID).set({
              userid: JSON.parse(localStorage.getItem('userID')),
              parkID: this.s_space.parkID
            })

          });
          this.router.navigate(['tabs/tab3']);
          const alert = await this.alertController.create({
            header: 'Reservation',
            subHeader: 'Your spot has been successfully Reserved.',
            message:
              'Failure to arrive in ' + this.time + ' mins and you will lose it.',
            buttons: ['OK']
          });

          await alert.present();

          this.booked = true;
          this.startcountdown(this.time);
          this.check = false;
          this.check1 = false;
        } else {
          const alert = await this.alertController.create({
            header: 'Reservation',
            subHeader: 'Please Select Time and Spot.',
            buttons: ['OK']
          });

          await alert.present();
        }


      }

    }


  }
  async lossSpot() {
    const alert = await this.alertController.create({
      header: 'Reservation Cancelled',
      subHeader: 'Im Sorry but your reservation has been cancelled due to late arrival.',
      buttons: ['OK']
    });


    await alert.present();
  }
  public dealwithit() {
    var snapshotResult1 = this.afstore.collection('parkingSpace', ref => ref.where('spaceNbr', '==', JSON.parse(localStorage.getItem('sspot'))).limit(1)).snapshotChanges().pipe(flatMap(spaces1 => spaces1));
    var subscripton1 = snapshotResult1.subscribe(doc => {
      this.s_space1 = <p_spaceI>doc.payload.doc.data();
      this.docRef1 = doc.payload.doc.ref;

      subscripton1.unsubscribe();
      console.log(this.s_space1);

      if (this.s_space1.reserved == true && this.s_space1.status == true) {
        console.log('mad');
        this.afstore.collection('parkingSpace').doc(this.s_space1.parkID).update({
          status: true,
          reserved: false
        });
        this.afstore.collection('reservation').doc(this.s_space1.parkID).delete();

        this.lossSpot();
      }
    });
  }

  async startcountdown(T: any) {

    this.intervalVar = setInterval(function () {
      this.sec++;
      if ((this.sec - 60) == 0) {
        this.min++;
        this.sec = this.sec - 60;
      }
      if (this.min == T) {
        this.dealwithit();
        //check Database here
        console.log("times Up bruh")
        //do this last (reseting values and stopping counter):
        clearInterval(this.intervalVar);
        this.sec = 0;
        this.min = 0;
        this.booked = false;
      }
    }.bind(this), 1000)
  }

  async selectSpot() {
    this.buttonColor="rgba(255,255,255,0.4)";
    await this.stall(100);
    this.buttonColor = "#000080";
    if (this.booked == true) {
      const alert = await this.alertController.create({
        header: 'Reservation Found!',
        message: "You have already made a reservation, would you like to cancel and make a new one?",
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Yes',
            handler: () => {
              //cancel current reservation
              this.sec = 0;
              this.min = 0;
              clearInterval(this.intervalVar);
              var spot = 'GP' + JSON.parse(localStorage.getItem('sspot'));
              this.afstore.collection('parkingSpace').doc(spot).update({
                reserved: false
              });
              this.afstore.collection('reservation').doc(spot).delete();

              console.log('new reservation selected');
              this.booked = false;
            }
          }
        ]
      });
      await alert.present();
    }
    else {
      this.check1 = true;
      this.router.navigate(['sspot']);

    }
  }
  async selectTime() {
    this.buttonColor1="rgba(255,255,255,0.4)";
    await this.stall(100);
    this.buttonColor1 = "#000080";
    if (this.booked == true) {
      const alert = await this.alertController.create({
        header: 'Reservation Found!',
        message: "You have already made a reservation, would you like to cancel and make a new one?",
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Yes',
            handler: () => {
              //cancel current reservation
              this.sec = 0;
              this.min = 0;
              clearInterval(this.intervalVar);
              var spot = 'GP' + JSON.parse(localStorage.getItem('sspot'));
              this.afstore.collection('parkingSpace').doc(spot).update({
                reserved: false
              });
              this.afstore.collection('reservation').doc(spot).delete();

              console.log('new reservation selected');
              this.booked = false;
            }
          }
        ]
      });
      await alert.present();
    }
    else {

      const alert = await this.alertController.create({
        header: 'Time Selection',
        inputs: [
          {
            name: 'radio1',
            type: 'radio',
            label: '5 Minutes',
            value: '5',
            checked: true
          },
          {
            name: 'radio2',
            type: 'radio',
            label: '10 Minutes',
            value: '10'
          },
          {
            name: 'radio3',
            type: 'radio',
            label: '15 Minutes',
            value: '15'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          },
          {
            text: 'Ok',
            handler: (data: string) => {
              console.log(data);
              this.check = true;
              this.time = parseInt(data);
            }
          }
        ]
      });

      await alert.present();
    }
  }
}
