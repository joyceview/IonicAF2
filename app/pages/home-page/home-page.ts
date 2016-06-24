import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ScientificFactsPage} from '../scientific-facts-page/scientific-facts-page';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  templateUrl: 'build/pages/home-page/home-page.html'
})
export class HomePage {

  items: FirebaseListObservable<any[]>;
  

  constructor(private _navController: NavController,
              af: AngularFire) {
    this.items = af.database.list('messages');
    
  }

  goToFactsPage(){
    this._navController.push(ScientificFactsPage);
  }
}
