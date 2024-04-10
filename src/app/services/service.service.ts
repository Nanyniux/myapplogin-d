import { Injectable } from '@angular/core';
//
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';

import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
//
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  usersCollection = 'users';

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}
  //
  loginWithGoogle() {
    this.afAuth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        // Autenticação bem-sucedida.
        const user = result.user;
        this.saveUserData(user);
        this.router.navigate(['/profile']);
      })
      .catch((error) => {});
  }
  //Salva os dados no firestore
  saveUserData(user: any) {
    return this.firestore.collection(this.usersCollection).doc(user.uid).set({
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    });
  }
  //Obter dados do usuario.
  getUserData(): Observable<any> {
    return this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.firestore
            .doc(`${this.usersCollection}/${user.uid}`)
            .valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }
}
