import { Component, NgZone, ViewChild } from '@angular/core';
import { Platform, Nav, AlertController} from "ionic-angular";
import { StatusBar, Splashscreen } from 'ionic-native';

// Import Pages
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import firebase from 'firebase';

//@Component({
//  templateUrl: 'app.html'
//})
@Component({
  template: `<ion-nav id="root-nav" [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = LoginPage;
  zone: NgZone;

  constructor(public platform: Platform, public alertCtrl: AlertController) {

    this.zone = new NgZone({});
    const config = {
      apiKey: "AIzaSyDQqSuW4k_N3xzZXxJpPsZ-6Y3PBx83mQU",
      authDomain: "manzanillolive-3d31b.firebaseapp.com",
      databaseURL: "https://manzanillolive-3d31b.firebaseio.com",
      storageBucket: "manzanillolive-3d31b.appspot.com",
      messagingSenderId: "90614686077"
    };
    firebase.initializeApp(config);

    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      this.zone.run( () => {
        if (!user) {
          this.rootPage = LoginPage;
          console.log("There's not a logged in user!");
          unsubscribe();
        } else {
          //this.rootPage = HomePage;
          // window.localStorage.setItem('uid', user.auth.uid);
          // window.localStorage.setItem('displayName', user.auth.displayName);
          // window.localStorage.setItem('email', user.auth.email);
          // window.localStorage.setItem('photoUrl', user.auth.photoURL);
          this.rootPage = TabsPage;
          console.log("There's a logged in user!");
          unsubscribe();
        }
      });
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      //this.initPushNotification();
    });
  } // constructor

  // initPushNotification(){
  //   if (!this.platform.is('cordova')) {
  //     console.warn("Push notifications not initialized. Cordova is not available - Run in physical device");
  //     return;
  //   }
  //   let push = Push.init({
  //     android: {
  //       senderID: "90614686077"
  //     },
  //     ios: {
  //       alert: "true",
  //       badge: false,
  //       sound: "true"
  //     },
  //     windows: {}
  //   });
  //
  //   push.on('registration', (data) => {
  //     console.log("device token ->", data.registrationId);
  //     //TODO - send device token to server
  //   });
  //   push.on('notification', (data) => {
  //     console.log('message', data.message);
  //     let self = this;
  //     //if user using app and push notification comes
  //     if (data.additionalData.foreground) {
  //       // if application open, show popup
  //       let confirmAlert = this.alertCtrl.create({
  //         title: 'New Notification',
  //         message: data.message,
  //         buttons: [{
  //           text: 'Ignore',
  //           role: 'cancel'
  //         }, {
  //           text: 'View',
  //           handler: () => {
  //             //TODO: Your logic here
  //             self.nav.push(DetailsPage, {message: data.message});
  //           }
  //         }]
  //       });
  //       confirmAlert.present();
  //     } else {
  //       //if user NOT using app and push notification comes
  //       //TODO: Your logic on click of push notification directly
  //       self.nav.push(DetailsPage, {message: data.message});
  //       console.log("Push notification clicked");
  //     }
  //   });
  //   push.on('error', (e) => {
  //     console.log(e.message);
  //   });
  // } //Notificaciones

}
