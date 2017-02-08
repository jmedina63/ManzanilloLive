import { EventPage } from './../event/event';
import { ErickNesftali } from './../bandas/erickneftali/erickneftali';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

/*
  Generated class for the Program page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-program',
  templateUrl: 'program.html'
})
export class ProgramPage {
  @ViewChild('programSlider') slider: Slides;
  eventPage = EventPage;
  erickNesftali = ErickNesftali;
  activeSlide : number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  programSliderOptions = {
    loop: true,
    spaceBetween: 10
  };

  goToSlide(slide: number) {
    this.slider.slideTo(slide);
  }

  onSlideChanged() {
    this.activeSlide = this.slider.getActiveIndex();
    console.log("Current index is", this.activeSlide);
  }


}
