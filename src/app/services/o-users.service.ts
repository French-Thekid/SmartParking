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
export class OccupiedUserService {
  private o_UserCollection: AngularFirestoreCollection<o_UserI>;

  private o_User: Observable<o_UserI[]>;

  constructor(db: AngularFirestore) {
    this.o_UserCollection = db.collection<o_UserI>('o_User');

    this.o_User = this.o_UserCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  geto_Users() {
    return this.o_User;
  }

  geto_User(id: string) {
    return this.o_UserCollection.doc<o_UserI>(id).valueChanges();
  }

  updateo_User(o_User: o_UserI, id: string) {
    return this.o_UserCollection.doc(id).update(this.o_User);
  }

  addo_User(o_User: o_UserI) {
    return this.o_UserCollection.add(o_User);
  }

  removeo_User(id) {
    return this.o_UserCollection.doc(id).delete();
  }
}

export interface o_UserI {
  userLicNbr: string;
  parkID: string;
  userid?: string;
}
