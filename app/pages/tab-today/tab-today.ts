import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { AddPrayerPage } from '../add-prayer/add-prayer';

/*
  Generated class for the TabTodayPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/tab-today/tab-today.html',
})
export class TabTodayPage {
  constructor(private nav: NavController) {}

  addPrayer() {
    // go to the session detail page
    // and pass in the session data
    this.nav.push(AddPrayerPage);
  }
}
