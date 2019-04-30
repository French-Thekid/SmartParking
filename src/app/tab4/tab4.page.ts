import { Component } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  ReportLicense1 = '';
  ReportLicense2 = '';
  ReportContent = '';
  buttonColor:string="#000080";
  buttonColor1:string="#000080";
  select1: string = "rgba(0,0,0,0.2)";
  select2: string = "rgba(0,0,0,0.2)";
  select3: string = "rgba(0,0,0,0.2)";
  tempLic: string;
  tempReport: string;
  tagg = false;
  tagg1 = true;
  constructor(
    public alertController: AlertController,
    private router: Router,
    public platform: Platform,
    public afstore: AngularFirestore

  ) { }
  stall(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
  async sendReport1(){
    this.select1 = "rgba(255,255,255,0.4)";
    await this.stall(100);
    this.select1 = "rgba(0,0,0,0.2)";
    if(JSON.parse(localStorage.getItem('userID'))==null ){
      const alert = await this.alertController.create({
        header: 'Notification',
        subHeader: 'Please Register/ Login to submit report',
        buttons: ['OK']
      });
      await alert.present();
    }
    else{
    const alert = await this.alertController.create({
      header: 'License Place Number Required',
      inputs: [
        {
          name: 'OLic',
          placeholder: 'Enter Violator License Plate number',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Report Cancelled');
          }
        },
        {
          text: 'Continue',
          handler: data => {
            if ((data.OLic=="") || (data.OLic.length!=6)) {
                this.inIm();
              }
              else{
                this.tagg=true;
                localStorage.setItem('TR',JSON.stringify('Someone else is parked in my assign parking spot'));
                localStorage.setItem('O_L',JSON.stringify(data.OLic));
                this.hold(this.tagg);
            }
          }
        }
      ]
    });
    alert.present();
  }
  }

  async hold(tag:boolean){
      console.log('tag: '+tag);
      const alert = await this.alertController.create({
        header: 'APMS Notification',
        message: 'Please Select a new available spot while we handle your issue using the button below in order to submit report',
        buttons: ['OK']
      });
      await alert.present();
      this.tagg=tag;
      if(tag==true){
        this.tagg1=false
      }
      else{
        this.tagg1=true
      }
  }

  async selectSpot(){
    this.buttonColor1="rgba(255,255,255,0.4)";
    await this.stall(100);
    this.buttonColor1 ="#000080";
      if(this.tagg==true){
        console.log("Report: "+JSON.parse(localStorage.getItem("TR"))+"")
            this.router.navigate(['sspot-r'])
            this.tagg=false;
            this.ReportLicense1="";
            this.ReportLicense2="";
            this.ReportContent="";
            this.tagg1=true
      }
      else{
        const alert = await this.alertController.create({
          header: 'APMS Warning',
          message: 'This option is only applicable with the first two popular issues',
          buttons: ['OK']
        });
        await alert.present();
      }
  }
  async sendReport3(){
    this.select3 = "rgba(255,255,255,0.4)";
    await this.stall(100);
    this.select3 = "rgba(0,0,0,0.2)";
    if(JSON.parse(localStorage.getItem('userID'))==null ){
      const alert = await this.alertController.create({
        header: 'Notification',
        subHeader: 'Please Register/ Login to submit report',
        buttons: ['OK']
      });
      await alert.present();
    }
    else{
    const alert = await this.alertController.create({
      header: 'License Place Number Required',
      inputs: [
        {
          name: 'OLic',
          placeholder: 'Violator License Plate number (Opt)',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Report Cancelled');
          }
        },
        {
          text: 'Make Report',
          handler: data => {
            var tag =true;
            if (data.OLic=="") {
               data.OLic="N/A"
             }
             else if (data.OLic.length!=6){
               this.inIm();
               tag=false
             }
             if(tag==true){
              this.ReportLicense1 = JSON.parse(localStorage.getItem('License'))+"";
              this.ReportLicense2=data.OLic;
              this.ReportContent="Someone Damage my vehicle, can someone please come check it out"
              this.afstore.collection('reports').doc(this.ReportLicense1).set({
                reporterLicNbr: this.ReportLicense1,
                reportLicNbr2: this.ReportLicense2,
                report: this.ReportContent,
                newSpot: "N/A"
              });
              this.reportMade();
              this.ReportLicense1="";
              this.ReportLicense2="";
              this.ReportContent="";
             }
          }
        }
      ]
    });
    alert.present();
  }
 }


  async reportMade(){
    const alert = await this.alertController.create({
      header: 'Report Submitted',
      subHeader: 'Our appologies for the inconvenience',
      message: 'A security guard on patrol will be with your shortly to address your reported issue',
      buttons: ['OK']
    });
    await alert.present();
  }
  async inIm(){
    const alert = await this.alertController.create({
      header: 'Warning',
      subHeader: 'Invalid Input',
      message: 'Please enter valid license plate numbers',
      buttons: ['OK']
    });
    await alert.present();
  }
  async sendReport2(){
    this.select2 = "rgba(255,255,255,0.4)";
    await this.stall(100);
    this.select2 = "rgba(0,0,0,0.2)";
    if(JSON.parse(localStorage.getItem('userID'))==null ){
      const alert = await this.alertController.create({
        header: 'Notification',
        subHeader: 'Please Register/ Login to submit report',
        buttons: ['OK']
      });
      await alert.present();
    }
    else{
      const alert = await this.alertController.create({
        header: 'License Plate Number Required',
        inputs: [
          {
            name: 'OLic',
            placeholder: 'Enter ViolatorLicense Plate number',
            type: 'text'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              console.log('Report Cancelled');
            }
          },
          {
            text: 'Make Report',
            handler: data => {
              if ((data.OLic=="") || (data.OLic.length!=6)) {
                  this.inIm();
                }
                else{
                  this.tagg=true;
                  localStorage.setItem('TR',JSON.stringify('The vehicle parked in the neighboring parking space is also in my space leaving not much space for me to park'));
                  localStorage.setItem('O_L',JSON.stringify(data.OLic));
                  this.hold(this.tagg);
                }
            }
          }
        ]
      });
      alert.present();
    }
    
  }
  async sendReport() {
    this.buttonColor="rgba(255,255,255,0.4)";
    await this.stall(100);
    this.buttonColor ="#000080";
    if(JSON.parse(localStorage.getItem('userID'))==null ){
      const alert = await this.alertController.create({
        header: 'Notification',
        subHeader: 'Please Register/ Login to submit report',
        buttons: ['OK']
      });
      await alert.present();
    }
    else{
    if(this.ReportContent!=""){
      if(this.ReportLicense2==""){
        this.ReportLicense2="N/A"
      }
      this.ReportLicense1 = JSON.parse(localStorage.getItem('License'))+"";
      this.afstore.collection('reports').doc(this.ReportLicense1).set({
        reporterLicNbr: this.ReportLicense1,
        reportLicNbr2: this.ReportLicense2,
        report: this.ReportContent,
        newSpot: "N/A"
      });
      this.reportMade();
      this.ReportLicense1="";
      this.ReportLicense2="";
      this.ReportContent="";
    }
    else{
      const alert = await this.alertController.create({
        header: 'Warning',
        subHeader: 'Please Explain your issue before submitting',
        buttons: ['OK']
      });
      await alert.present();
    }
   }
  }
 
}