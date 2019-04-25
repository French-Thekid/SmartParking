import { Component, OnInit, Query } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, AlertController } from '@ionic/angular';
import { AngularFirestore, DocumentReference } from 'angularfire2/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { QRCService, qrcI } from '../services/qrcservice.service';
import { OccupiedUserService } from '../services/occupied-user.service';
import { Observable, BehaviorSubject, combineLatest, Subject, ObjectUnsubscribedError } from 'rxjs';
import { switchMap, flatMap } from 'rxjs/operators';
import { query } from '@angular/core/src/render3';
import { p_spaceI, ParkingSpaceService } from '../services/parking-space.service';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-allocate-vehicle',
  templateUrl: './allocate-vehicle.page.html',
  styleUrls: ['./allocate-vehicle.page.scss']
})
export class AllocateVehiclePage implements OnInit {
  License = '';
  userallocateid = '';
  qrcObj: qrcI;
  encodedData: string = '';
  FPrinter: boolean = false;
  Reservation: boolean = false;
  query: Query;
  docRef: DocumentReference;
  spaces: Observable<any[]>;
  freeSpace: p_spaceI;
  freeSpaceID: string;

  docRef1: DocumentReference;
  spaces1: Observable<any[]>;
  reservedSpace: p_spaceI;

  done = false;



  constructor(
    private router: Router,
    public platform: Platform,
    public afstore: AngularFirestore,
    private vibration: Vibration,
    private qrcService: QRCService,
    private alertController: AlertController,
    private o_userService: OccupiedUserService,
    private p_spaceService: ParkingSpaceService
  ) { }

  ngOnInit() {
    //         console.log('Queried', spacesRef);
    // this.qrcService.getQRCS().subscribe(res => {
    //   console.log('QRC', res);
    // });
  }

  async updatePrint() {
    if (this.FPrinter == true) {
      const alert = await this.alertController.create({
        header: 'Faulty Printer Notification',
        subHeader: 'Faulty Printer Enabled',
        message: 'Allocation details will now be displayed onscreen',
        translucent: true,
        buttons: ['OK']
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Faulty Printer Notification',
        subHeader: 'Faulty Printer Disabled',
        message: 'Allocation details will no longer be displayed onscreen',
        translucent: true,
        buttons: ['OK']
      });
      await alert.present();
    }
  }
  async Reserve() {
    if (this.Reservation == true) {
      const alert = await this.alertController.create({
        header: 'Reservation Notification',
        subHeader: 'Reservation Allocation Enabled',
        translucent: true,
        buttons: ['OK']
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Reservation Notification',
        subHeader: 'Reservation Allocation Disabled',
        translucent: true,
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  async allocateVehicle() {
    if (this.License == '') {
      const alert = await this.alertController.create({
        header: 'Warning',
        subHeader: 'Invalid Input',
        message: 'Please enter license plate number and/or ID to continue',
        translucent: true,
        buttons: ['OK']
      });
      await alert.present();
    }
    else {
      if (this.Reservation==true/*(this.userallocateid != '') && (this.License != "")*/) {

        var snapshotResult = this.afstore.collection('reservation', ref => ref.where('userid', '==', this.userallocateid).limit(1)).snapshotChanges().pipe(flatMap(spaces1 => spaces1));
        if (snapshotResult != null) {
          this.done = false;
          console.log('this.done');
          //NOTIFY USER

          var subscripton = snapshotResult.subscribe(doc => {
            this.reservedSpace = <p_spaceI>doc.payload.doc.data();
            this.docRef = doc.payload.doc.ref;

            subscripton.unsubscribe();
            console.log(this.reservedSpace.parkID);
            // this.freeSpace.parkID = this.freeSpaceID;
            // console.log(this.freeSpaceID);
            this.afstore.collection('parkingSpace').doc(this.reservedSpace.parkID).update({
              status: false,
              reserved: false
            })

            this.afstore.collection('o_users').doc(this.License).set({
              userLicNbr: this.License,
              userid: this.userallocateid,
              parkID: this.reservedSpace.parkID
            });
            this.afstore.collection('reservation').doc(this.reservedSpace.parkID).delete();

          });
          console.log('Reservation found');
        }
        if ((this.userallocateid.length == 5) && (this.done == false)) {

          var snapshotResult = this.afstore.collection('parkingSpace', ref => ref.where('status', '==', true).where('reserved', '==', false).limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
          var subscripton = snapshotResult.subscribe(doc => {
            this.freeSpace = <p_spaceI>doc.payload.doc.data();
            this.docRef = doc.payload.doc.ref;

            subscripton.unsubscribe();
            console.log(this.freeSpace.parkID);
            // this.freeSpace.parkID = this.freeSpaceID;
            // console.log(this.freeSpaceID);
            this.afstore.collection('parkingSpace').doc(this.freeSpace.parkID).update({
              status: false
            })

            this.afstore.collection('o_users').doc(this.License).set({
              userLicNbr: this.License,
              userid: this.userallocateid,
              parkID: this.freeSpace.parkID
            });



          });
        }

        else if ((this.userallocateid.length == 7) && (this.done == false)) {
          var snapshotResult = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '>', 'GP20').limit(40)).snapshotChanges().pipe(flatMap(spaces => spaces));
          var subscripton = snapshotResult.subscribe(doc => {
            this.freeSpace = <p_spaceI>doc.payload.doc.data();
            this.docRef = doc.payload.doc.ref;
            if ((this.freeSpace.status == true) && (this.freeSpace.reserved == false)) {
              subscripton.unsubscribe();
              console.log(this.freeSpace.parkID);
              // this.freeSpace.parkID = this.freeSpaceID;
              // console.log(this.freeSpaceID);
              this.afstore.collection('parkingSpace').doc(this.freeSpace.parkID).update({
                status: false
              })

              this.afstore.collection('o_users').doc(this.License).set({
                userLicNbr: this.License,
                userid: this.userallocateid,
                parkID: this.freeSpace.parkID
              });
            }


          });
        }
        this.vibration.vibrate(0.1);
        // }

      }
      else {

        var snapshotResult = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '>', 'GP20').limit(40)).snapshotChanges().pipe(flatMap(spaces => spaces));
        var subscripton = snapshotResult.subscribe(doc => {
          this.freeSpace = <p_spaceI>doc.payload.doc.data();
          this.docRef = doc.payload.doc.ref;
          if ((this.freeSpace.status == true) && (this.freeSpace.reserved == false)) {
            subscripton.unsubscribe();
            console.log(this.freeSpace.parkID);
            // this.freeSpace.parkID = this.freeSpaceID;
            // console.log(this.freeSpaceID);
            this.afstore.collection('parkingSpace').doc(this.freeSpace.parkID).update({
              status: false
            })

            this.afstore.collection('o_users').doc(this.License).set({
              userLicNbr: this.License,
              userid: this.userallocateid,
              parkID: this.freeSpace.parkID
            });
          }


        });



        //var o_userRef = this.afstore.collection('o_users');
        //var query = o_userRef.where('userLicNbr', '==', '7907EM');
        //this.afstore
        //.collection('o_users')
        //.doc(this.License)
        //.set(query);
        /* this.afstore.collection('qrc').doc('4154EM').doc('').set({
                userLicNbr: userLicense,
                userid: userallocateid
              });*/
        if (this.FPrinter == true) {
          const alert = await this.alertController.create({
            header: 'On Screen Ticket',
            subHeader: 'SCIT Parking Lot',
            message: 'License Plate #:' + this.License + ' \n\n\n ', //'+this.encodedData,
            translucent: true,
            buttons: ['OK']
          });
          await alert.present();
        }

        this.vibration.vibrate(0.1);
      }
    }
    await this.stall(2000);
    this.License = '';
    this.userallocateid = '';
  }

  back() {
    this.router.navigate(['admin-portal']);
  }
  stall(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
