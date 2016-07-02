import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { SelectedPrayerTopicPage } from '../../pages/selected-prayer-topic/selected-prayer-topic';

import { UserDataService } from '../../providers/user-data.service';
import { PrayerDataService } from '../../providers/prayer-data.service';

@Component({
  selector: 'prayer-topic-list-component',
  templateUrl: 'build/components/prayer-topic-list-component/prayer-topic-list-component.html',
  providers: [UserDataService, PrayerDataService]
})

export class PrayerTopicListComponent {

  prayerTopics: FirebaseListObservable<any>;

  constructor(private nav: NavController,
    private userData: UserDataService,
    private prayerData: PrayerDataService) {
  }

  ngOnInit() {
    this.prayerTopics = this.prayerData.getPrayerTopics();
  }

  selectPrayerTopic(prayerTopic){
    this.nav.push(SelectedPrayerTopicPage, prayerTopic)
  }
}
