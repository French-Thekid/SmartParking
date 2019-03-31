import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class OccupiedUserService {
  o_usersCollection: AngularFirestoreCollection<o_users>;

  private o_users: Observable<o_users[]>;

  constructor(db: AngularFirestore) {
    this.o_usersCollection = db.collection<o_users>('o_users');

    this.o_users = this.o_usersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getO_Users() {
    return this.o_users;
  }

  getO_User(userLicNbr) {
    return this.o_usersCollection.doc<o_users>(userLicNbr).valueChanges();
  }

  updateO_Users(qrc: o_users, userLicNbr: string) {
    return this.o_usersCollection.doc(userLicNbr).update(this.o_users);
  }

  addO_Users(o_users: o_users) {
    return this.o_usersCollection.add(o_users);
  }

  removeO_Users(userLicNbr) {
    return this.o_usersCollection.doc(userLicNbr).delete();
  }
}

export interface o_users {
  userid: string;
  userLicNbr?: string;
  parkID: string;
}
