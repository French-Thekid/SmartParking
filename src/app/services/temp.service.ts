
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Temp {
  userLicNbr?: string;

}

@Injectable({
  providedIn: 'root'
})
export class TempService {
  private tempCollection: AngularFirestoreCollection<Temp>;

  private temps: Observable<Temp[]>;

  constructor(db: AngularFirestore) {
    this.tempCollection = db.collection<Temp>('temp');

    this.temps = this.tempCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getTodos() {
    return this.temps;
  }

  getTodo(id) {
    return this.tempCollection.doc<Temp>(id).valueChanges();
  }

  // updateTodo(todo: Todo, id: string) {
  //   return this.todosCollection.doc(id).update(todo);
  // }

  // addTodo(todo: Todo) {
  //   return this.todosCollection.add(todo);
  // }

  // removeTodo(id) {
  //   return this.todosCollection.doc(id).delete();
  // }
}