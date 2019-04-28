import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth, User } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { user } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<user>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<user>(`users/${user.uid}`).valueChanges();
        }
      })
    );
  }

  private updateUserData({ uid, userid, username, accountType,license,department,email }: user) {
    const userRef: AngularFirestoreDocument<user> = this.afs.doc(
      `users/${uid}`
    );

    const data = {
      uid,
      userid,
      username,
      accountType,
      license,
      department,
      email
    };

    return userRef.set(data, { merge: true });
  }
}
