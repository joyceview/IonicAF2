import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {FIREBASE_PROVIDERS, 
  defaultFirebase, 
  AngularFire, 
  AuthMethods, 
  AuthProviders, 
  firebaseAuthConfig} from 'angularfire2';


import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  private rootPage:any;

  constructor(private platform:Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    // apiKey: "AIzaSyDRkJqr5N_1YhB96IzdZbwMVnEGds0tGXg",
    // authDomain: "friendlychat-3c7d6.firebaseapp.com",
    // databaseURL: "https://friendlychat-3c7d6.firebaseio.com",
    // storageBucket: "friendlychat-3c7d6.appspot.com",

    apiKey: "AIzaSyC7N7aZEaNqikGia6iOJwySRh_i7xSGuZI",
    authDomain: "readlistenpray-6c1ee.firebaseapp.com",
    databaseURL: "https://readlistenpray-6c1ee.firebaseio.com",
    storageBucket: "readlistenpray-6c1ee.appspot.com",
  }),
  firebaseAuthConfig({
      provider: AuthProviders.Google,
      method: AuthMethods.Redirect
    })
])
