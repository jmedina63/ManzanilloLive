import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Import Pages
import { EventPage } from './../event/event';
import { MapsPage } from './../maps/maps';
import { ArtistsPage } from './../artists/artists';
import { ProgramPage } from './../program/program';
import { ProfilePage } from '../profile/profile';
import { EventCreatePage } from '../event-create/event-create';
import { EventListPage } from '../event-list/event-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  programPage = ProgramPage;
  aristsPage = ArtistsPage;
  mapsPage = MapsPage;
  eventPage = EventPage;
  profilePage = ProfilePage;
  eventcreatepage = EventCreatePage;
  eventlistpage = EventListPage;

  constructor(public nav: NavController) {
    this.nav = nav;
  }

  goToProfile(){
    this.nav.push(ProfilePage);
  }

  goToCreate(){
    this.nav.push(EventCreatePage);
  }

  goToList(){
    this.nav.push(EventListPage);
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad LoginPage');
    }
}
