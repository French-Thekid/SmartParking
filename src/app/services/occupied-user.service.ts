import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OccupiedUserService {
  private o_usersCollection: AngularFirestoreCollection<o_userI>;

  private o_users: Observable<o_userI[]>;

  constructor(db: AngularFirestore) {
    this.o_usersCollection = db.collection<o_userI>('o_users');

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

  getO_User(userLicNbr: string) {
    return this.o_usersCollection.doc<o_userI>(userLicNbr).valueChanges();
  }

  updateO_Users(o_users: o_userI, userLicNbr: string) {
    return this.o_usersCollection.doc(userLicNbr).update(this.o_users);
  }

  addO_Users(o_users: o_userI) {
    return this.o_usersCollection.add(o_users);
  }

  removeO_Users(o_users: o_userI) {
    return this.o_usersCollection.doc(o_users.userLicNbr).delete();
  }
}

export interface o_userI {
  userid: string;
  userLicNbr: string;
  parkID: string;
}
