import { Component, OnInit, Query } from '@angular/core';
import { Router } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { switchMap, flatMap } from 'rxjs/operators';
import { AngularFirestore, DocumentReference } from 'angularfire2/firestore';
import {
  o_userI,
  OccupiedUserService
} from '../services/occupied-user.service';
import { Observable } from 'rxjs';
import { p_spaceI } from '../services/parking-space.service';
import { UserService } from '../user.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-manage-sys',
  templateUrl: './manage-sys.page.html',
  styleUrls: ['./manage-sys.page.scss'],
})
export class ManageSysPage implements OnInit {
  select1="rgba(0,0,0,0.2)"
  select2="rgba(0,0,0,0.1)"
  showMe=false;
  License1: string="";
  License2: string="";
  afstore: any;
  currentImage: any;
  scannedCode: string;
  License: string="";
  o_users: o_userI[];
  query: Query;
  docRef: DocumentReference;
  users: Observable<any[]>;
  ouser: o_userI;
  ouserID: string;
  constructor(private router:Router,private alertController:AlertController) { }



  ngOnInit() {
  }
  back() {
    this.router.navigate(['admin-portal']);
  }

  stall(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async removeV(){
      this.select2 = "rgba(255,255,255,0.4)";
      await this.stall(300);
      this.select2 = "rgba(0,0,0,0.1)";
      const alert = await this.alertController.create({
        header: 'License Place Number Required',
        inputs: [
          {
            name: 'License',
            placeholder: 'Driver License Plate number',
            type: 'text'
          }
        ],
        buttons: [
          {
            text: 'Remove Vehicle',
            handler: data => {
              if (data.License!="") {
                this.remove(data);
              }
              else{
                 
              }
            }
          },
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              console.log('Removal of vehicle Cancelled');
            }
          }
         
        ]
      });
      alert.present();
    }

    async swapV(){
      this.select1 = "rgba(255,255,255,0.4)";
      await this.stall(300);
      this.select1 = "rgba(0,0,0,0.2)";
      if(this.showMe==false){
        this.showMe=true;
      }
      else{
        this.showMe=false;
      }
    }

   

    async selectParking(){
        if(this.License1==""){
          const alert = await this.alertController.create({
            header: 'Warning',
            subHeader: 'Invalid Input',
            message: 'Please enter license plate number and/or ID to continue',
            translucent: true,
            buttons: ['OK']
          });
          await alert.present();
        }
        else{
          // var snapshotResult = this.afstore.collection('o_users', ref => ref.where('userLicNbr', '==', this.License1).limit(1)).snapshotChanges().pipe(flatMap(users => users));
          // var subscripton = snapshotResult.subscribe(doc => {
          //   this.ouser = <o_userI>doc.payload.doc.data();
          //   this.docRef = doc.payload.doc.ref;
    
          //   subscripton.unsubscribe();
          //   console.log(this.ouser);
          //   if(this.ouser.parkID==null){
          //     console.log('not found');
          //     //this.Fail(this.License);
          //   }
          //   localStorage.setItem('tempID', JSON.stringify(this.ouser.userid));
          //   // this.freeSpace.parkID = this.freeSpaceID;
          //   // console.log(this.freeSpaceID);
          //   this.afstore.collection('parkingSpace').doc(this.ouser.parkID).update({
          //     status: true,
          //     reserved: false
          //   });
          //   this.afstore.collection('reservation').doc(this.ouser.parkID).delete();
          // });
          // this.afstore.collection('o_users').doc(this.License1).delete();

          // localStorage.setItem('tempLic', JSON.stringify(this.License1));
          // this.router.navigate(['swap-vehicle']);
        }
    }
    async selectParking1(){
      if(this.License2==""){
         this.fail();
      }
      else{
        // var snapshotResult = this.afstore.collection('o_users', ref => ref.where('userLicNbr', '==', this.License2).limit(1)).snapshotChanges().pipe(flatMap(users => users));
        // var subscripton = snapshotResult.subscribe(doc => {
        //   this.ouser = <o_userI>doc.payload.doc.data();
        //   this.docRef = doc.payload.doc.ref;
  
        //   subscripton.unsubscribe();
        //   console.log(this.ouser);
        //   if(this.ouser.parkID==null){
        //     console.log('not found');
        //     //this.Fail(this.License);
        //   }
        //   localStorage.setItem('tempID', JSON.stringify(this.ouser.userid));
        //   // this.freeSpace.parkID = this.freeSpaceID;
        //   // console.log(this.freeSpaceID);
        //   this.afstore.collection('parkingSpace').doc(this.ouser.parkID).update({
        //     status: true,
        //     reserved: false
        //   });
        //   this.afstore.collection('reservation').doc(this.ouser.parkID).delete();
        // });
        // this.afstore.collection('o_users').doc(this.License2).delete();

        // localStorage.setItem('tempLic', JSON.stringify(this.License2));
        // this.router.navigate(['swap-vehicle']);
      }
  }
  remove(data:any){
     
        // var snapshotResult = this.afstore.collection('o_users', ref => ref.where('userLicNbr', '==', data.License).limit(1)).snapshotChanges().pipe(flatMap(users => users));
        // var subscripton = snapshotResult.subscribe(doc => {
        //   this.ouser = <o_userI>doc.payload.doc.data();
        //   this.docRef = doc.payload.doc.ref;
  
        //   subscripton.unsubscribe();
        //   console.log(this.ouser);
        //   if(this.ouser.parkID==null){
        //     console.log('not found');
        //     //this.Fail(this.License);
        //   }
        //   // this.freeSpace.parkID = this.freeSpaceID;
        //   // console.log(this.freeSpaceID);
        //   this.afstore.collection('parkingSpace').doc(this.ouser.parkID).update({
        //     status: true,
        //     reserved: false
        //   });
        //   this.afstore.collection('reservation').doc(this.ouser.parkID).delete();
        // });
        // this.afstore.collection('o_users').doc(data.License).delete();
      
    }
    
   async fail(){
      const alert = await this.alertController.create({
        header: 'Warning',
        subHeader: 'Invalid Input',
        message: 'Please enter license plate number and/or ID to continue',
        translucent: true,
        buttons: ['OK']
      });
      await alert.present();
    }
}
