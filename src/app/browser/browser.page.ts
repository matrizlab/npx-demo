import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;
@Component({
  selector: 'app-browser',
  templateUrl: './browser.page.html',
  styleUrls: ['./browser.page.scss'],
})
export class BrowserPage implements OnInit {

  constructor() {
    Browser.addListener('browserPageLoaded', () => {
      console.log('browserPageLoaded event called');
    });
    Browser.addListener('browserFinished', () => {
      console.log('browserFinished event called');
    });

    Browser.prefetch({
      urls: ['https://github.com']
    });

   }

  ngOnInit() {
  }

  async openBrowser() {
    await Browser.open({ url: 'https://github.com' });
  }

}
