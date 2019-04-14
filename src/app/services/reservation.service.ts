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
export class ReservationService {
  private reservationsCollection: AngularFirestoreCollection<reservationI>;

  private reservations: Observable<reservationI[]>;

  constructor(db: AngularFirestore) {
    this.reservationsCollection = db.collection<reservationI>('reservation');

    this.reservations = this.reservationsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getReservations() {
    return this.reservations;
  }

  getReservation(userid: string) {
    return this.reservationsCollection.doc<reservationI>(userid).valueChanges();
  }

  updateReservations(reservations: reservationI, userid: string) {
    return this.reservationsCollection.doc(userid).update(this.reservations);
  }

  addReservations(reservations: reservationI) {
    return this.reservationsCollection.add(reservations);
  }

  removeO_Users(reservations: reservationI) {
    return this.reservationsCollection.doc(reservations.userid).delete();
  }
}

export interface reservationI {
  userid: string;
  parkID: string;
}
