import { Component, ViewChild } from '@angular/core';
import { Tabs} from 'ionic-angular';
import { HomePage } from '../home/home';
import { ARView } from '../ar-view/ar-view';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @ViewChild('myTabs') public tabRef: Tabs;

  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ARView;
  tab3Root: any = AboutPage;
  tab4Root: any = ContactPage;

  constructor() {
  }

  public selectTab(index: number) {
    console.log("selectTab called");
    this.tabRef.select(index);
  }
}
