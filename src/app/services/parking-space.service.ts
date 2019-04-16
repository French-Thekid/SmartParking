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
export class ParkingSpaceService {
  private p_spaceCollection: AngularFirestoreCollection<p_spaceI>;

  private p_space: Observable<p_spaceI[]>;

  constructor(db: AngularFirestore) {
    this.p_spaceCollection = db.collection<p_spaceI>('p_space');

    this.p_space = this.p_spaceCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getp_spaces() {
    return this.p_space;
  }

  getp_space(id: string) {
    return this.p_spaceCollection.doc<p_spaceI>(id).valueChanges();
  }

  updatep_space(p_space: p_spaceI, parkID: string) {
    return this.p_spaceCollection.doc(parkID).update(this.p_space);
  }

  addp_space(p_space: p_spaceI) {
    return this.p_spaceCollection.add(p_space);
  }

  removep_space(p_space: p_spaceI) {
    return this.p_spaceCollection.doc(p_space.parkID).delete();
  }
}

export interface p_spaceI {
  parkingLotName: string;
  parkID: string;
  reserved: boolean;
  spaceNbr: string;
  status: boolean;
}
