import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class QRCService {
  qrcCollection: AngularFirestoreCollection<qrc>;

  private qrc: Observable<qrc[]>;

  constructor(db: AngularFirestore) {
    this.qrcCollection = db.collection<qrc>('qrc');

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

  getQRC() {
    return this.qrc;
  }

  getQRCS(id) {
    return this.qrcCollection.doc<qrc>(id).valueChanges();
  }

  updateQRC(qrc: qrc, id: string) {
    return this.qrcCollection.doc(id).update(qrc);
  }

  addQRC(qrc: qrc) {
    return this.qrcCollection.add(qrc);
  }

  removeQRC(id) {
    return this.qrcCollection.doc(id).delete();
  }
}

export interface qrc {
  createdAt?: any;
  userid: string;
  userLicNbr?: string;
  parkID: string;
}
