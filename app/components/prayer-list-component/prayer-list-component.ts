import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { SelectedPrayerPage } from '../../pages/selected-prayer/selected-prayer';

import { UserDataService } from '../../providers/user-data.service';
import { PrayerDataService } from '../../providers/prayer-data.service';


@Component({
  selector: 'prayer-list-component',
  templateUrl: 'build/components/prayer-list-component/prayer-list-component.html',
  providers: [UserDataService, PrayerDataService]
})
export class PrayerListComponent {

  _prayerTopicKey: string = '<no prayer topic selected>';

  @Input()
  set prayerTopicKey(prayerTopicKey: string) {
    this._prayerTopicKey = (prayerTopicKey && prayerTopicKey.trim()) || '<no prayer topic selected>';
  }

  prayers: FirebaseListObservable<any>;

  constructor(
    private nav: NavController,
    private af: AngularFire,
    private userData: UserDataService,
    private prayerData: PrayerDataService
  ) {
  }

  ngOnInit() {
    console.log("Prayer Topic Key: "+this._prayerTopicKey);
    if (this._prayerTopicKey != '<no prayer topic selected>')
    {
      this.prayers = this.prayerData.getPrayersByTopic(this._prayerTopicKey);
    }
    else {
      this.prayers = this.prayerData.getPrayersByUser("user1");
    }
  }

  selectPrayer(prayer){
    this.nav.push(SelectedPrayerPage, prayer)
  }


}
