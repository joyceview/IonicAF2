import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {Storage, LocalStorage, Events} from 'ionic-angular';
import {FIREBASE_PROVIDERS, 
  defaultFirebase, 
  AngularFire, 
  AuthMethods, 
  AuthProviders, 
  firebaseAuthConfig} from 'angularfire2';


import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import { TutorialPage } from './pages/tutorial/tutorial';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  IS_LAUNCHED = "iNewKey";

  private rootPage:any;
  storage = new Storage(LocalStorage);

  // return a promise
  isLaunched() {
    return this.storage.get(this.IS_LAUNCHED).then((value) => {
      return value;
    });
  }

  setRootPage() {
      

    this.storage.remove(this.IS_LAUNCHED);

    console.log(this.isLaunched()===null?"IsNull":"Has value");
    console.log(this.isLaunched()?"true":"false");

    if (this.isLaunched()) {
      console.log("BEFORE: Launched");
    }
    else {
      console.log("BEFORE: First Load");
    }

    if ( this.isLaunched() ) {
        this.rootPage = TabsPage ;
    }
    else {
      this.storage.set(this.IS_LAUNCHED, false);
      this.rootPage = TutorialPage;
    }
    if (this.isLaunched()) {
      console.log("Launched");
    }
    else {
      console.log("First Launch");
    }

  }

  constructor(private platform:Platform) {

    this.storage.clear();

    //this.storage.get(this.IS_LAUNCHED);
    console.log(this.storage.get(this.IS_LAUNCHED)===null?"IsNull":"Has value");
    //console.log(this.isLaunched()?"true":"false");

    this.rootPage = TabsPage; //TutorialPage;

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
      provider: AuthProviders.Twitter,
      method: AuthMethods.Redirect,
    })
], {
  tabbarPlacement: 'bottom'
})
