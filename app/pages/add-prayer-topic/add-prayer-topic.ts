import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import { PrayerDataService } from '../../providers/prayer-data.service'
import { UserDataService } from '../../providers/user-data.service'


@Component({
  templateUrl: 'build/pages/add-prayer-topic/add-prayer-topic.html',
  providers: [PrayerDataService, UserDataService]
})
export class AddPrayerTopicPage {

  prayerTopics: FirebaseListObservable<any>;

  constructor(
    private nav: NavController,
    private prayerData: PrayerDataService,
    private userData: UserDataService
  ) {}

  ngOnInit() {
    this.prayerTopics = this.prayerData.getPrayerTopics();
  }

  doneAddingPrayerTopic(newTitle: string, newContent: string) {
    
    this.prayerData.addPrayerTopic(newTitle, newContent);
    this.nav.pop();
  }
}
