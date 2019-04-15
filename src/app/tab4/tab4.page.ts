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

  constructor(
    public alertController: AlertController,
    private router: Router,
    public platform: Platform,
    public afstore: AngularFirestore

  ) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  sendReport() {

    this.afstore.collection('reports').doc(this.ReportLicense1).set({
      reporterLicNbr: this.ReportLicense1,
      reportLicNbr2: this.ReportLicense2,
      report: this.ReportContent
    });

  }
 
}