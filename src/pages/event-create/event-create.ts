import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventData } from '../../providers/event-data';

import { ProfileData } from '../../providers/profile-data';
import { AuthData } from '../../providers/auth-data';
import { LoginPage } from '../login/login';

/*
  Generated class for the EventCreate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-event-create',
  templateUrl: 'event-create.html',
})

export class EventCreatePage {

  constructor(public nav: NavController, public eventData: EventData) {
    this.nav = nav;
    this.eventData = eventData;
  }

  createEvent(eventName: string, eventDate: string, eventPrice: number, eventCost: number) {
    this.eventData.createEvent(eventName, eventDate, eventPrice, eventCost).then( () => {
      this.nav.pop();
    });
  }

}
