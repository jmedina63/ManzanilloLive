import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MyProgramPage } from '../my-program/my-program';
import { MyPerfilPage } from '../my-perfil/my-perfil';
import { ProfilePage } from '../profile/profile';
import { EventCreatePage } from '../event-create/event-create';
import { EventListPage } from '../event-list/event-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = HomePage;
  tab2Root: any = MyProgramPage;
  tab3Root: any = MyPerfilPage;
  tab4Root: any = ProfilePage;
  tab5Root: any = EventCreatePage;
  tab6Root: any = EventListPage;

  constructor() {

  }
}
