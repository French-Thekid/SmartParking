import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument,DocumentReference } from '@angular/fire/firestore';
import { ActivatedRoute, Router  } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-creports',
  templateUrl: './creports.page.html',
  styleUrls: ['./creports.page.scss'],
})
export class CreportsPage implements OnInit {
  reports:any;
  Reports=[] as string[];
  reportKeys=[] as string[];
  licenses:[]
  temp=[] as string[];
  count=0;
  tempChk =""


  constructor(private router:Router, private alertController: AlertController,private route: ActivatedRoute,public afstore: AngularFirestore) { 

    var snapshot=this.afstore.collection("reports").get()
    this.stall(1000);
    this.reports = snapshot.subscribe(doc => {
      this.reports.unsubscribe();
      doc.docs.forEach(doc => {
        this.getReports(doc);
      })
    });
  }
  getReports(doc)
  {
    this.Reports.push(doc.data());
    console.log(doc.data())
  }
  getReports1(doc)
  {
    this.temp.push(doc.data());
    this.count++;
  }
  getReport() {
    return this.afstore.collection('reports').snapshotChanges();
  }

  ngOnInit() {

  }

  async deleteReport(License: string){
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Are you sure you want to delete this report?',
      translucent: true,
      buttons: [{
        text: 'No',
        role: 'cancel'
      },

      {
        text: 'Yes',
        handler: async data => {
          
          this.afstore.collection('reports').doc(License).delete();
          this.removed();
          this.router.navigate(['creports']);
          localStorage.setItem('RChk', 'false');
          console.log('RChk 1: '+JSON.parse(localStorage.getItem('RChk')))
          await this.stall(2000);
          localStorage.setItem('RChk', null);
        }
      }]

    });
    await alert.present();
    
    
  }
  async removed(){
    const alert = await this.alertController.create({
      header: 'Notification',
      subHeader: 'Report deleted',
      buttons: ['OK']
    });
    await alert.present();
  }
  doRefresh(event) {
    console.log('Refreshing');
   
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  back() {
    this.router.navigate(['admin-portal']);
  }
  stall(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
