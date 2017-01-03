import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ArtPage } from '../pages/art/art';
import { FashionPage } from '../pages/fashion/fashion';
import { FoodsPage } from '../pages/foods/foods';
import { FunnyPage } from '../pages/funny/funny';
import { NaturePage } from '../pages/nature/nature';
import { AboutPage } from '../pages/about/about';

import { Data } from '../providers/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ArtPage,
    FashionPage, 
    FoodsPage,
    FunnyPage,
    NaturePage,
    AboutPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ArtPage,
    FashionPage, 
    FoodsPage,
    FunnyPage,
    NaturePage,
    AboutPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Data]
})
export class AppModule {}
