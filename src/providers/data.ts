import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/map';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {

  url: string = 'https://public-api.wordpress.com/rest/v1.1/sites/rtankip.wordpress.com/posts/?';
  public loadedPosts:ReplaySubject<any> = new ReplaySubject(1);

  constructor(public http: Http) {
    console.log('Hello Data Provider');
  }

  loadAll() {
    this.http.get(this.url+'all').map(res => res.json()).subscribe(res => this.loadedPosts.next(res));
    return this.loadedPosts;
  }

  loadPosts(category) {
    this.http.get(this.url+ 'category=' + category).map(res => res.json()).subscribe(res => this.loadedPosts.next(res));
    return this.loadedPosts;
  }


}
