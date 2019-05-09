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
import { UserService } from '../user.service';
import { user } from '../services/user.model';
import { LoadingController } from '@ionic/angular';

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
  wait= false

  docRef1: DocumentReference;
  spaces1: Observable<any[]>;
  reservedSpace: p_spaceI;
  who: user;
  users: Observable<any[]>;
  user_: user;
  done = false;



  constructor(
    private router: Router,
    public platform: Platform,
    public loadingController: LoadingController,
    public afstore: AngularFirestore,
    private vibration: Vibration,
    private qrcService: QRCService,
    public user: UserService,
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
  async presentLoading() {
    
  }

  async allocateVehicle() {
    if ((this.License == '')||(this.License.length!=6)) {
      const alert = await this.alertController.create({
        header: 'Warning',
        subHeader: 'Invalid Input',
        message: 'Please enter a valid license plate number to continue',
        translucent: true,
        buttons: ['OK']
      });
      await alert.present();
    }
    else {
      //getting ID

      var x = JSON.parse(localStorage.getItem('TempID'));
      if (x==null){

      }
      else if(x.length!=0){
          localStorage.setItem('TempID', '1234');
        }
        var snapshotResult = this.afstore.collection('users', ref => ref.where('license', '==', this.License).limit(1)).snapshotChanges().pipe(flatMap(spaces1 => spaces1));
        var subscriptond = snapshotResult.subscribe(doc => {
          this.who = <user>doc.payload.doc.data();
          this.docRef = doc.payload.doc.ref;
          console.log("Just change ID ");
          subscriptond.unsubscribe();
          console.log("License: "+this.License);
          console.log("ID: "+this.who.userid);
          if((this.who.userid.length>7)||(this.who.userid.length<5))
          {
              this.done=true;
          }
          localStorage.setItem('TempID', this.who.userid);
          console.log("TempID: "+JSON.parse(localStorage.getItem('TempID')));
        });

         await this.stall(1000);//since the above function is async we need to wait a lil bit on the data
      //  console.log("userID1: "+JSON.parse(localStorage.getItem('TempID'))+"\n\n");

       //Reservation section
     //  if (this.Reservation == true) {

        var tempID=JSON.parse(localStorage.getItem('TempID'))+"";
          var tag=false
          var snapshotResult = this.afstore.collection('reservation', ref => ref.where('license', '==', this.License).limit(1)).snapshotChanges().pipe(flatMap(spaces1 => spaces1));
          var subscripton = snapshotResult.subscribe(doc => {
          this.reservedSpace = <p_spaceI>doc.payload.doc.data();
          this.docRef = doc.payload.doc.ref;
          subscripton.unsubscribe();
          console.log(this.reservedSpace.parkID);
         
          this.afstore.collection('parkingSpace').doc(this.reservedSpace.parkID).update({
            status: false,
            reserved: false
          })
          localStorage.setItem("tag","true");
          console.log('Inside');
          this.afstore.collection('o_users').doc(this.License).set({
            userLicNbr: this.License,
            userid: JSON.parse(localStorage.getItem('TempID'))+"",
            parkID: this.reservedSpace.parkID
          });
          this.afstore.collection('reservation').doc(this.reservedSpace.parkID).delete();

          this.vibration.vibrate(0.1);
        });
        
          const loading = await this.loadingController.create({
            message: 'Please Wait ...',
            duration: 500
          });
          await loading.present();
      
          const { role, data } = await loading.onDidDismiss();
      
        //   //console.log('Loading dismissed!');
        if(JSON.parse(localStorage.getItem("tag"))!=true){
            localStorage.setItem("tag","false");
        }
        console.log("tag: "+JSON.parse(localStorage.getItem('tag')))
        if(JSON.parse(localStorage.getItem("tag"))==false){
            // const alert = await this.alertController.create({
            //   header: 'APMS Notification',
            //   subHeader: 'No Reservation Found',
            //   message: 'Recommendation: Switching off reservation mode and allocate regularly',
            //   translucent: true,
            //   buttons: ['OK']
            // });
            // await alert.present();
            // console.log('No reservation Found');
            this.wait=false; 
            
            var tempID=JSON.parse(localStorage.getItem('TempID'))+"";
        console.log('tempID Variable:'+tempID)

         if ((tempID.length == 5) && (this.done == false)) {
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
              userid: tempID,
              parkID: this.freeSpace.parkID
            });
          });
          this.vibration.vibrate(0.1);
         }
         else if ((tempID.length == 7) && (this.done == false)) {
          console.log("2")
          var snapshotResult = this.afstore.collection('parkingSpace', ref => ref.where('parkID', '>', 'GP20').limit(40)).snapshotChanges().pipe(flatMap(spaces => spaces));
          var subscripton = snapshotResult.subscribe(doc => {
            this.freeSpace = <p_spaceI>doc.payload.doc.data();
            this.docRef = doc.payload.doc.ref;
            if ((this.freeSpace.status == true) && (this.freeSpace.reserved == false)) {
              subscripton.unsubscribe();
              console.log(this.freeSpace.parkID);
              this.afstore.collection('parkingSpace').doc(this.freeSpace.parkID).update({
                status: false
              })
              var id = JSON.parse(localStorage.getItem('TempID'));

              this.afstore.collection('o_users').doc(this.License).set({
                userLicNbr: this.License,
                userid: tempID,
                parkID: this.freeSpace.parkID
              });
            }
          });
          this.vibration.vibrate(0.1);
         }
        else{
          console.log("3")
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
              var id = JSON.parse(localStorage.getItem('TempID'));
              this.afstore.collection('o_users').doc(this.License).set({
                userLicNbr: this.License,
                userid: '',
                parkID: this.freeSpace.parkID
                  });
                }
            });
          }
        }
        else{
          this.vibration.vibrate(0.1);
          console.log('Reservation Found');
          await this.stall(1000)
          localStorage.setItem("tag","false");
        }
      // }
      // else {




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
          var snapshotResult = this.afstore.collection('o_users', ref => ref.where('license', '==', this.License).where('reserved', '==', false).limit(1)).snapshotChanges().pipe(flatMap(spaces => spaces));
          var subscripton = snapshotResult.subscribe(async doc => {
            var info = <p_spaceI>doc.payload.doc.data();
            this.docRef = doc.payload.doc.ref;

            subscripton.unsubscribe();
            console.log(info.parkID);
            // this.freeSpace.parkID = this.freeSpaceID;
            // console.log(this.freeSpaceID);
            const alert = await this.alertController.create({
              header: 'On Screen Ticket',
              subHeader: 'SCIT Parking Lot',
              message: 'License Plate #:' + this.License + ' \nParking Space: '+info.parkID, //'+this.encodedData,
              translucent: true,
              buttons: ['OK']
            });
            await alert.present();
          });
        }

        this.vibration.vibrate(0.1);

     // }
    }
    await this.stall(3000);
    this.License = '';
    
  }

  back() {
    this.router.navigate(['admin-portal']);
  }
  stall(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
