import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PrayerListComponent } from '../../components/prayer-list-component/prayer-list-component'

import { UserDataService } from '../../providers/user-data.service';
import { PrayerDataService } from '../../providers/prayer-data.service';

@Component({
  templateUrl: 'build/pages/selected-prayer-topic/selected-prayer-topic.html',
  providers: [UserDataService, PrayerDataService],
  directives: [PrayerListComponent]
})
export class SelectedPrayerTopicPage {

  prayerTopic: any;

  constructor(
    private nav: NavController,
    private nav_params: NavParams,
    private userData: UserDataService,
    private prayerData: PrayerDataService
  ) {

  }

  ngOnInit() {
    this.prayerTopic = this.nav_params.data;
    
  }

}
