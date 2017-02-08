import { EventPage } from './../event/event';
import { ErickNesftali } from './../bandas/erickneftali/erickneftali';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Artists page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-artists',
  templateUrl: 'artists.html'
})
export class ArtistsPage {
  eventPage = EventPage;
  erickNesftali = ErickNesftali;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtistsPage');
  }

}
