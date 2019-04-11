import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, AlertController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { QRCService, qrcI } from '../services/qrcservice.service';
import { OccupiedUserService } from '../services/occupied-user.service';
import { p_spaceI } from '../services/parking-space.service';
import { ɵangular_packages_common_common_c } from '@angular/common';

@Component({
  selector: 'app-allocate-vehicle',
  templateUrl: './allocate-vehicle.page.html',
  styleUrls: ['./allocate-vehicle.page.scss']
})
export class AllocateVehiclePage implements OnInit {
  License = '';
  userallocateid = '';
  qrcObj: qrcI;
  encodedData:string="";
  FPrinter: boolean=false;
  spacesRef: any;
  tempid: any;


  constructor(
    private router: Router,
    public platform: Platform,
    public afstore: AngularFirestore,
    private qrcService: QRCService,
    private alertController: AlertController,
    private o_userService: OccupiedUserService
  ) {}

  ngOnInit() {
    //         console.log('Queried', spacesRef);
            
    // this.qrcService.getQRCS().subscribe(res => {
    //   console.log('QRC', res);
    // });
  }

  async updatePrint(){
    if(this.FPrinter==true){
      const alert = await this.alertController.create({
        header: 'Faulty Printer Notification',
        subHeader: 'Faulty Printer Enabled',
        message: "Allocation details will now be displayed onscreen",
        translucent: true,
        buttons: ['OK']
      });
      await alert.present();
    }
    else{
      const alert = await this.alertController.create({
        header: 'Faulty Printer Notification',
        subHeader: 'Faulty Printer Disabled',
        message: "Allocation details will no longer be displayed onscreen",
        translucent: true,
        buttons: ['OK']
      });
      await alert.present();
    }
    
  }
  async allocateVehicle() {
    if(this.License==""){
        const alert = await this.alertController.create({
          header: 'Warning',
          subHeader: 'Invalid Input',
          message: "Please enter license plate number and/or ID to continue",
          translucent: true,
          buttons: ['OK']
        });
        await alert.present();
    }
    else{
      // if(this.userallocateid==""){

      // }
      //else{
          //var spacesRef = this.afstore.collection("parkingSpace")
          //var query = spacesRef.where()
          
            
             
          //var amt = spacesRef.;
          
          // this.spacesRef = this.afstore.collection('parkingSpace', res => res.where('status', '==', true).limit(1)).get();
          // console.log(this.spacesRef);
          // dataObj: any): Promise<any> {
            
        //  }
        

        
       var id=this.afstore.collection('parkingSpace',res => res.where("status", "==", true).limit(1)).get().subscribe
        (function(querySnapshot) {
         // var dataID: string
          querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
              
            //dataID = doc.id;  
            console.log(doc.id, " => ", doc.data());
        });
        //return dataID;
      } );
         
      // console.log("ID: "+id)
       
        
        
          




        // this.spacesRef = this.afstore.collection('parkingSpace',ref => ref.where('status','==','true').limit(1)).get();
        // //const personRef: firebase.database.Reference = firebase.database().ref(`/parkingSpace/`);

        // var washingtonRef = this.afstore.collection("parkingSpace").doc('GP01');

        // // Set the "capital" field of the city 'DC'
        // return washingtonRef.update({
        //     status: false
        // }).then(function() {
        //     console.log("Document successfully updated!");
        // }).catch(function(error) {
        //     // The document probably doesn't exist.
        //     console.error("Error updating document: ", error);
        // });
        
        


          
          // this.afstore.collection('o_users').doc(this.License).set({
          //   userLicNbr: this.License,
          //   userid: this.userallocateid,
          //   parkID: 'it wuk'
          // });

          //var o_userRef = this.afstore.collection('o_users');
          //var query = o_userRef.where('userLicNbr', '==', '7907EM');
          //this.afstore
          //.collection('o_users')
          //.doc(this.License)
          //.set(query);
          /* this.afstore
            .collection('qrc')
            .doc('4154EM').doc('')
            .set({
              userLicNbr: userLicense,
              userid: userallocateid
            });*/
            if(this.FPrinter==true){
              const alert = await this.alertController.create({
                header: 'On Screen Ticket',
                subHeader: 'SCIT Parking Lot',
                message: "License Plate #:"+this.License+' \n\n\n ',//'+this.encodedData,
                translucent: true,
                buttons: ['OK']
              });
              await alert.present();
            }
            this.License="";
      }
        
    }
    
  //}

  back() {
    this.router.navigate(['admin-portal']);
  }
}
