import { Component } from '@angular/core';

/*
  Generated class for the TestComp component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'test-comp',
  templateUrl: 'build/components/test-comp/test-comp.html'
})
export class TestComp {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }
}
