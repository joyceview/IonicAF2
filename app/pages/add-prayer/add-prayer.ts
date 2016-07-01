import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable'
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import { PrayerDataService } from '../../providers/prayer-data.service'
import { UserDataService } from '../../providers/user-data.service'

@Component({
  templateUrl: 'build/pages/add-prayer/add-prayer.html',
  providers: [PrayerDataService, UserDataService]
})

export class AddPrayerPage {

  prayers: FirebaseListObservable<any>;

  constructor(
    private nav: NavController,
    private af: AngularFire,
    private prayerData: PrayerDataService,
    private userData: UserDataService
  
  ) {
      
  }
  
  ngOnInit() {
    this.prayers = this.prayerData.getPrayersByUser("user1");
  }


  doneAddingPrayer(newName: string, newSize: string) {
    
    this.prayerData.addUserPrayer("user1", newName, newSize);
    this.nav.pop();
  }
}
