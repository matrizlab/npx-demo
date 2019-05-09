import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

import { Plugins, Capacitor } from '@capacitor/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Browser',
      url: '/browser',
      icon: 'browsers'
    }
  ];

  constructor(
    private platform: Platform,
    private router: Router
    ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (Capacitor.isPluginAvailable('SplashScreen')) {
        Plugins.SplashScreen.hide();
      }
    });
  }
}
