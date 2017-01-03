import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { SocialSharing, GoogleAnalytics } from 'ionic-native';
/*
  Generated class for the Fashion page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fashion',
  templateUrl: 'fashion.html'
})
export class FashionPage {

  posts: any;
  category: string = 'Fashion';

  constructor(public navCtrl: NavController, public navParams: NavParams, private data: Data) {
    this.data.loadPosts(this.category).subscribe((data) => {
      this.posts = data.posts;
    });
  }

  whatsappShare(image){
    SocialSharing.shareViaWhatsApp("Please like my Facebook page", image,  "https://www.facebook.com/fun.tankip");
  }
 
  twitterShare(image){
    SocialSharing.shareViaTwitter("Via",image,"@r_tankip");
  }
 
  facebookShare(image){
    SocialSharing.shareViaFacebook("By Tankip", image,"https://www.facebook.com/fun.tankip");
  }

  otherShare(image){
    SocialSharing.share("By Tankip","By Tankip",image,"https://www.facebook.com/fun.tankip");
  }

  ionViewDidLoad() {
    GoogleAnalytics.trackView('Fashion Page');
  }

}
