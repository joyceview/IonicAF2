import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/selected-prayer/selected-prayer.html',
})

export class SelectedPrayerPage {

  prayer: any;

  constructor(private nav: NavController,
              private nav_params: NavParams) {
    this.prayer = this.nav_params.data;
  }

}
