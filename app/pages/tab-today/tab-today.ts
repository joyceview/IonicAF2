import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import { AddPrayerPage } from '../add-prayer/add-prayer';
import { SelectedPrayerPage } from '../selected-prayer/selected-prayer';

import { UserDataService } from '../../providers/user-data.service';
import { PrayerDataService } from '../../providers/prayer-data.service';


@Component({
  templateUrl: 'build/pages/tab-today/tab-today.html',
  providers: [UserDataService, PrayerDataService]
})

export class TabTodayPage {

  prayers: FirebaseListObservable<any>;

  constructor(
    private nav: NavController,
    private af: AngularFire,
    private userData: UserDataService,
    private prayerData: PrayerDataService
  ) {
  }

  ngOnInit() {
    this.prayers = this.prayerData.getPrayersByUser("user1");
  }

  

  addPrayer() {
    this.nav.push(AddPrayerPage);
  }

  selectPrayer(prayer){
    this.nav.push(SelectedPrayerPage, prayer)
  }

}
