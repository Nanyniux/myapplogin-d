import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
//
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { provideFirebaseApp, initializeApp, getApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment.development';

import { provideFirestore, getFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [AppComponent, LoginComponent, ProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseconf),
    AngularFirestoreModule,
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'myapp-92238',
        appId: '1:347903590644:web:cdc3976e98c0a060091ea1',
        databaseURL: 'https://myapp-92238-default-rtdb.firebaseio.com',
        storageBucket: 'myapp-92238.appspot.com',
        apiKey: 'AIzaSyCJKsgukokqWcV7iH-XkF58lUkRPIu1PFU',
        authDomain: 'myapp-92238.firebaseapp.com',
        messagingSenderId: '347903590644',
      })
    ),
    provideAuth(() => getAuth()),

    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'myapp-92238',
        appId: '1:347903590644:web:cdc3976e98c0a060091ea1',
        databaseURL: 'https://myapp-92238-default-rtdb.firebaseio.com',
        storageBucket: 'myapp-92238.appspot.com',
        apiKey: 'AIzaSyCJKsgukokqWcV7iH-XkF58lUkRPIu1PFU',
        authDomain: 'myapp-92238.firebaseapp.com',
        messagingSenderId: '347903590644',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],

  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
