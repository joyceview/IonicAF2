import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {AngularFire, FirebaseListObservable} from 'angularfire2';



@Component({
  templateUrl: 'build/pages/add-prayer/add-prayer.html',
})

export class AddPrayerPage {

  prayers: FirebaseListObservable<any>;

  constructor(private nav: NavController,
              public af: AngularFire) {
                this.prayers = af.database.list('/users/user1/prayers');
              }
  


  doneAddingPrayer(newName: string, newSize: string) {
    var date = new Date();
    this.prayers.push({ name: newName, size: newSize, createdOn: date.toUTCString() });

    this.nav.pop();
  }
}
