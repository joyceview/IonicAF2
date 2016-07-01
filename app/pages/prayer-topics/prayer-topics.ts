import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import {AngularFire, FirebaseListObservable} from 'angularfire2';

import { PrayerTopicListComponent } from '../../components/prayer-topic-list-component/prayer-topic-list-component'
import { AddPrayerTopicPage } from '../add-prayer-topic/add-prayer-topic';

@Component({
  templateUrl: 'build/pages/prayer-topics/prayer-topics.html',
  directives: [PrayerTopicListComponent]
})

export class PrayerTopicsPage {
  

  constructor(private nav: NavController) {}

  
  addPrayerTopic() {
    this.nav.push(AddPrayerTopicPage);
  }
}
