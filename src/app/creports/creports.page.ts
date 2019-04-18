import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument,DocumentReference } from '@angular/fire/firestore';
import { ActivatedRoute, Router  } from '@angular/router';


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


  constructor(private router:Router, private route: ActivatedRoute,public afstore: AngularFirestore) { 

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

  deleteReport(License: string){
    this.afstore.collection('reports').doc(License).delete();
    this.router.navigate(['creports']);
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
