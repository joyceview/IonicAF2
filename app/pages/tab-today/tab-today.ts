import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import { PrayerListComponent } from '../../components/prayer-list-component/prayer-list-component'

import { AddPrayerPage } from '../add-prayer/add-prayer';



@Component({
  templateUrl: 'build/pages/tab-today/tab-today.html',
  directives: [PrayerListComponent]
})

export class TabTodayPage {

  prayers: FirebaseListObservable<any>;

  constructor(
    private nav: NavController
  ) {
  }

  

  addPrayer() {
    this.nav.push(AddPrayerPage);
  }


}
