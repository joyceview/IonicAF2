import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { UserDataService } from '../providers/user-data.service';
import { PrayerDataService } from '../providers/prayer-data.service';

@Component({
  providers: [UserDataService, PrayerDataService]
})

export class PrayerTopicModel {

  checklist: any;
  checklistObserver: any;

  constructor(
    public title: string, 
    public prayersContent: string,
    public createdBy: string,
    public createdOn: string,
    public categories: any[],
    public prayers: any[],
    public items: any[],

    private userData: UserDataService,
    private prayerData: PrayerDataService
  ) {

    this.items = items;
    this.prayers = prayers || [];

  }

  addPrayerTopic() :void {
    var date = new Date();
    this.prayerData.addPrayerTopic(
      this.title, 
      this.prayersContent);
  }
  

  addItem(item): void {

    this.items.push({
      title: item,
      checked: false
    });

  }

  removeItem(item): void {

    let index = this.items.indexOf(item);

    if(index > -1){
      this.items.splice(index, 1);
    }    

  }

  renameItem(item, title): void {

    let index = this.items.indexOf(item);

    if(index > -1){
      this.items[index].title = title;
    }

  }

  setTitle(title): void {
    this.title = title;
  }

  toggleItem(item): void {
    item.checked = !item.checked; 
  }

}