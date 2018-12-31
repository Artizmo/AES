// modules
import { Component } from '@angular/core';

// services
import { AppService } from 'services/app.service';
import { AesService } from 'services/aes.service';

interface App {
  UUID: string,
  title: string,
  path: string
}

interface AppState {
  current: App,
  loaded: {[key: string]: App}
}

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  public title: string;
  public appCount: number;
  public currentApp: App;
  public apps: App[];
  constructor(private appService: AppService, private aesService: AesService) {
    appService.applications$.subscribe((appState: AppState) => {
      this.title = appState.current.title;
      this.aesService.setPortalTitle(appState.current.title);
      this.appCount = Object.keys(appState.loaded).length;
      this.apps = Object.keys(appState.loaded).map(key => appState.loaded[key]);
      this.currentApp = appState.current;
    });
  }

  __handleSwitch(app) {
    this.appService.switch(app);
  }

  __handleClose(app) {
    this.appService.unload(app)
  }

}
