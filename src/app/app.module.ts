import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Import Pages
import { MapsPage } from './../pages/maps/maps';
import { EventPage } from './../pages/event/event';
import { ArtistsPage } from './../pages/artists/artists';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MyProgramPage } from '../pages/my-program/my-program';
import { MyPerfilPage } from '../pages/my-perfil/my-perfil';
import { AboutPage } from './../pages/about/about';
import { ProgramPage } from '../pages/program/program';
import { ErickNesftali } from '../pages/bandas/erickneftali/erickneftali';
import { NewsDetailPage } from '../pages/news-detail/news-detail';
import { NewsListingPage } from '../pages/news-listing/news-listing';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SignupPage } from '../pages/signup/signup';

// Import providers
import { AuthData } from '../providers/auth-data';
import { EventData } from '../providers/event-data';
import { ProfileData } from '../providers/profile-data';


@NgModule({
  declarations: [
    MyApp,
    MyProgramPage,
    TabsPage,
    HomePage,
    AboutPage,
    ProgramPage,
    MyPerfilPage,
    ArtistsPage,
    EventPage,
    ErickNesftali,
    MapsPage,
    NewsDetailPage,
    NewsListingPage,
    LoginPage,
    ProfilePage,
    ResetPasswordPage,
    SignupPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyProgramPage,
    TabsPage,
    HomePage,
    AboutPage,
    ProgramPage,
    MyPerfilPage,
    ArtistsPage,
    EventPage,
    ErickNesftali,
    MapsPage,
    NewsDetailPage,
    NewsListingPage,
    LoginPage,
    ProfilePage,
    ResetPasswordPage,
    SignupPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},AuthData,EventData,ProfileData]
})
export class AppModule {}
