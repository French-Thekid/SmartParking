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
  select1: string = "rgba(0,0,0,0.2)";
  select2: string = "rgba(0,0,0,0.2)";

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
  async sendReport1(sex: string){
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
          name: 'ULic',
          placeholder: 'Your License Plate number',
          type: 'text'
        },
        {
          name: 'OLic',
          placeholder: 'Next Person License Plate number',
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
            if ((data.ULic!="")&&(data.OLic!="")) {
              this.ReportLicense1=data.ULic;
              this.ReportLicense2=data.OLic;
              this.ReportContent="Someone else is parked in my assign parking spot"
              this.afstore.collection('reports').doc(this.ReportLicense1).set({
                reporterLicNbr: this.ReportLicense1,
                reportLicNbr2: this.ReportLicense2,
                report: this.ReportContent
              });
              this.reportMade();
              this.ReportLicense1="";
              this.ReportLicense2="";
              this.ReportContent="";
            } else {
              this.inIm();
              return false;
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
  async sendReport2(sex: string){
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
            name: 'ULic',
            placeholder: 'Your License Plate number',
            type: 'text'
          },
          {
            name: 'OLic',
            placeholder: 'Next Person License Plate number',
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
              if ((data.ULic!="")&&(data.OLic!="")) {
                this.ReportLicense1=data.ULic;
                this.ReportLicense2=data.OLic;
                this.ReportContent="The vehicle parked in the neighboring parking space is also in my space leaving not much space for me to park"
                this.afstore.collection('reports').doc(this.ReportLicense1).set({
                  reporterLicNbr: this.ReportLicense1,
                  reportLicNbr2: this.ReportLicense2,
                  report: this.ReportContent
                });
                this.reportMade();
                this.ReportLicense1="";
                this.ReportLicense2="";
                this.ReportContent="";
              } else {
                this.inIm();
                return false;
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
    if((this.ReportLicense1!="")&&(this.ReportContent!="")){
      if(this.ReportLicense2==""){
        this.ReportLicense2="N/A"
      }
      this.afstore.collection('reports').doc(this.ReportLicense1).set({
        reporterLicNbr: this.ReportLicense1,
        reportLicNbr2: this.ReportLicense2,
        report: this.ReportContent
      });
      this.reportMade();
      this.ReportLicense1="";
      this.ReportLicense2="";
      this.ReportContent="";
    }
    else{
      const alert = await this.alertController.create({
        header: 'Warning',
        subHeader: 'Please fill out form before submitting',
        buttons: ['OK']
      });
      await alert.present();
    }
   }
  }
 
}