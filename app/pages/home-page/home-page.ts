import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthProviders, AuthMethods } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

import { ScientificFactsPage } from '../scientific-facts-page/scientific-facts-page';
import { TestComp } from '../../components/test-comp/test-comp';

@Component({
  templateUrl: 'build/pages/home-page/home-page.html',
  directives: [TestComp]
})
export class HomePage {

  items: FirebaseListObservable<any[]>;
  orderSubject: Subject<any>;

  constructor(private _navController: NavController,
              public af: AngularFire) {
    this.orderSubject = new Subject(); 
          
    this.items = af.database.list('bible-version/versions', {
      query: {
        orderByChild: this.orderSubject
      }
    }
    );
    
    this.orderBooksBy("name");    
  }
  orderBooksBy(orderBy: string) {
    this.orderSubject.next(orderBy); 
  }

  goToFactsPage(){
    this._navController.push(ScientificFactsPage);
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Twitter,
      method: AuthMethods.Popup,
    });
  }
  overrideLogin() {
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
    });    
  }
}
