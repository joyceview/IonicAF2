import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import {UserDataService} from './user-data.service';

@Injectable()
export class PrayerDataService {
  data: any;

  prayerTopics: FirebaseListObservable<any>;
  userPrayers: FirebaseListObservable<any>;

  constructor(
    private http: Http,
    private af: AngularFire,
    private userData: UserDataService
  ) {
    this.data = null;
    
  }

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('path/to/data.json')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });
  }

  /* ------- Prayer Topic ------- */

  getPrayerTopics() {
    return this.prayerTopics = this.af.database.list('/prayertopics');
  }

  addPrayerTopic(
    newTopicTitle: string, 
    newDetails: string
  ) {
    var prayersList = newDetails.split("\n\n");

    var formatedPrayerList = prayersList.map(function(elem){
        return {"name":elem};
    });
    
    this.af.database.list('/prayertopics').push({ 
      name: newTopicTitle, 
      prayers: formatedPrayerList,
      createdBy: this.userData.getUsername(), 
      createdOn: (new Date()).toUTCString() 
    });
  }

  getPrayersByTopic(key: string) {
    return this.af.database.list(`/prayertopics/${key}/prayers`);
  }

  removePrayerTopic(key: string) {
    this.prayerTopics.remove(key);
  }


  /* ------- Prayer Topic End ------- */


  /* ------- User Prayer  ------- */
  getPrayersByUser(uid: string){
    return this.userPrayers = this.af.database.list(`users/${uid}/prayers`)
  }

  addUserPrayer(uid: string, newName: string, newSize: string) {
    var date = new Date();

    this.af.database.list(`users/${uid}/prayers`).push({ 
        name: newName, 
        size: newSize, 
        createdOn: date.toUTCString() 
      });
  }

  updateUserPrayer(key: string, newPrayerDetails: string) {
      var date = new Date();
      this.userPrayers.update( key, { 
        name: newPrayerDetails,
        updatedOn: date.toUTCString()
      });
  }

  deleteUserPrayer(key: string) {    
      this.userPrayers.remove(key); 
  }

  /* ------- User Prayer End  ------- */


}