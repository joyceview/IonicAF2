import {IONIC_DIRECTIVES} from 'ionic-framework/ionic';
import {Component} from '@angular/core';

@Component({
  selector: 'predefined-card',
  template: `
    <ion-card>
      <ion-card-header>
         This is a test
      </ion-card-header>
        This is test content
      <ion-card-content>  
      </ion-card-content>
    </ion-card>
   `,
  directives: [IONIC_DIRECTIVES]
})

export class PredefinedCard {
  constructor() {
  }
}