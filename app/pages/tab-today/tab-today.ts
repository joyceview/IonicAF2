import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import { AddPrayerPage } from '../add-prayer/add-prayer';
import { SelectedPrayerPage } from '../selected-prayer/selected-prayer';

import { UserDataService } from '../../providers/user-data.service';


@Component({
  templateUrl: 'build/pages/tab-today/tab-today.html',
  providers: [UserDataService]
})

export class TabTodayPage {

  prayers: FirebaseListObservable<any>;

  constructor(
    private nav: NavController,
    public af: AngularFire,
    private userData: UserDataService
  ) {
    this.prayers = af.database.list('/users/user1/prayers');

  }

  addPrayer() {
    this.nav.push(AddPrayerPage);
  }

  selectPrayer(prayer){
    this.nav.push(SelectedPrayerPage, prayer)
  }

}
