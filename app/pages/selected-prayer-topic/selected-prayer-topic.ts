import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { UserDataService } from '../../providers/user-data.service';
import { PrayerDataService } from '../../providers/prayer-data.service';

@Component({
  templateUrl: 'build/pages/selected-prayer-topic/selected-prayer-topic.html',
  providers: [UserDataService, PrayerDataService]
})
export class SelectedPrayerTopicPage {

  prayerTopic: any;

  constructor(
    private nav: NavController,
    private nav_params: NavParams,
    // private af: AngularFire,
    private userData: UserDataService,
    private prayerData: PrayerDataService
  ) {

  }

  ngOnInit() {
    this.prayerTopic = this.nav_params.data;
    
  }

}
