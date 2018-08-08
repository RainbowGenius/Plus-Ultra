import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { UserConfigProvider } from '../providers/user_config/user_config';



@Component({
  templateUrl: 'app.html',
  providers: [
    UserConfigProvider
  ]
})
export class MyApp {
  rootPage:any = IntroPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, UserConfigProvider: UserConfigProvider) {
    platform.ready().then(() => {
      let config = UserConfigProvider.getConfigData();
      if(config == null) {
        this.rootPage = IntroPage;
        UserConfigProvider.setConfigData(false);
      } else {
        this.rootPage = TabsPage;
      }
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
