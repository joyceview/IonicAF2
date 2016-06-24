import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ScientificFactsPage} from '../scientific-facts-page/scientific-facts-page';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

@Component({
  templateUrl: 'build/pages/home-page/home-page.html'
})
export class HomePage {

  items: FirebaseListObservable<any[]>;
  orderSubject: Subject<any>;

  constructor(private _navController: NavController,
              af: AngularFire) {
    this.orderSubject = new Subject();            
    this.items = af.database.list('books', {
      query: {
        orderByChild: this.orderSubject
      }
    });
    
  }
  orderBooksBy(orderBy: string) {
    this.orderSubject.next(orderBy); 
  }

  goToFactsPage(){
    this._navController.push(ScientificFactsPage);
  }
}
