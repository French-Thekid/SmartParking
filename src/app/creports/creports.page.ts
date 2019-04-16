import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument,DocumentReference } from '@angular/fire/firestore';
import { ActivatedRoute, Router  } from '@angular/router';
import { Reports } from './report.model';

@Component({
  selector: 'app-creports',
  templateUrl: './creports.page.html',
  styleUrls: ['./creports.page.scss'],
})
export class CreportsPage implements OnInit {
  reports: Reports[];
  constructor(private router:Router, private route: ActivatedRoute,public afstore: AngularFirestore) { }

  getReport() {
    return this.afstore.collection('reports').snapshotChanges();
  }

  ngOnInit() {

  }

  deleteReport(License: string){
    this.afstore.doc('reports/' + License).delete();
  }
  

  back() {
    this.router.navigate(['admin-portal']);
  }
}
