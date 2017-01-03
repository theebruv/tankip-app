import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, GoogleAnalytics } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { ArtPage } from '../pages/art/art';
import { FashionPage } from '../pages/fashion/fashion';
import { FoodsPage } from '../pages/foods/foods';
import { FunnyPage } from '../pages/funny/funny';
import { NaturePage } from '../pages/nature/nature';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Arts Place', component: ArtPage },
      { title: 'Fashion and Style', component: FashionPage },
      { title: 'Foods and Drinks', component: FoodsPage },
      { title: 'Fun and Funny', component: FunnyPage },
      { title: 'Nature and Places', component: NaturePage },
      { title: 'About Tankip', component: AboutPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      GoogleAnalytics.debugMode();
      GoogleAnalytics.startTrackerWithId("UA-88922205-2");
      GoogleAnalytics.enableUncaughtExceptionReporting(true)
        .then((success) => {
          console.log(success);
        }).catch((error) => {
          console.log(error);
        });
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
