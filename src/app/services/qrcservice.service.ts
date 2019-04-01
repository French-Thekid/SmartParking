import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { defineBase } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class QRCService {
  private qrcCollection: AngularFirestoreCollection<qrcI>;

  private qrc: Observable<qrcI[]>;

  constructor(db: AngularFirestore) {
    this.qrcCollection = db.collection<qrcI>('qrc');

    this.qrc = this.qrcCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getQRCS() {
    return this.qrc;
  }

  getqrc(id: string) {
    return this.qrcCollection.doc<qrcI>(id).valueChanges();
  }

  updateqrc(qrc: qrcI, id: string) {
    return this.qrcCollection.doc(id).update(this.qrc);
  }

  addqrc(qrc: qrcI) {
    return this.qrcCollection.add(qrc);
  }

  removeqrc(id) {
    return this.qrcCollection.doc(id).delete();
  }
}

export interface qrcI {
  userLicNbr: string;
  parkID?: string;
  userid?: string;
}
