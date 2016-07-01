import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import { UserDataService } from '../../providers/user-data.service';
import { PrayerDataService } from '../../providers/prayer-data.service';

@Component({
  templateUrl: 'build/pages/selected-prayer/selected-prayer.html',
  providers: [UserDataService, PrayerDataService]
})

export class SelectedPrayerPage {

  prayer: any;
  prayers: FirebaseListObservable<any>;
  isEditButton = true;
  isDoneButton = false;

  constructor(
    private nav: NavController,
    private nav_params: NavParams,
    // private af: AngularFire,
    private userData: UserDataService,
    private prayerData: PrayerDataService
  ) {
  }

  ngOnInit() {
    this.prayer = this.nav_params.data;
    this.prayers = this.prayerData.getPrayersByUser("user1");
    this.isEditButton = true;
    this.isDoneButton = false;
  }

  showEditPrayer(){
    this.isEditButton = false;
    this.isDoneButton = true;

    
  }

  doneEditingPrayer(key: string, newPrayerDetails: string){
    this.isEditButton = true;
    this.isDoneButton = false;

    // this.savePrayer(key, newPrayerDetails);
    this.prayerData.updateUserPrayer(key, newPrayerDetails);
  }

  // savePrayer(key: string, newPrayerDetails: string) {
  //   this.prayers.update(key, {name: newPrayerDetails});
  // }

}
