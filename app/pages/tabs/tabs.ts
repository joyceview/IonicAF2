import {Component} from '@angular/core'
import {HomePage} from '../home-page/home-page';
import {AboutPage} from '../about-page/about-page';
import {ContactPage} from '../contact-page/contact-page';
import { PrayerTopicsPage } from '../prayer-topics/prayer-topics';

import { TabTodayPage } from '../tab-today/tab-today';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = TabTodayPage; // HomePage;
    this.tab2Root = HomePage;
    this.tab3Root = ContactPage;
    this.tab4Root = PrayerTopicsPage;
  }
}
