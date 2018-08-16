// angular modules
import { Injectable } from '@angular/core';

// rxjs
import { ReplaySubject } from 'rxjs';

interface App {
  UUID: string,
  title: string
}

interface AppState {
  current: App,
  loaded: {[key: string]: App}
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private __applications: AppState = {
    loaded: {},
    current: { UUID: '', title: ''}
  };
  private __applicationsSubject = new ReplaySubject();
  public applications$ = this.__applicationsSubject.asObservable();

  constructor() { }

  load(app: App) {
    if (!this.__applications.loaded[app.UUID]) {
      this.__applications.loaded[app.UUID] = app;
    }
    this.__applications.current = app;
    this.__applicationsSubject.next(this.__applications);
  }

  unload(app: App) {
    if (this.__applications.loaded[app.UUID]) {
      delete this.__applications.loaded[app.UUID];
    }
    // if app is also current, be sure to set current to next app    
    this.__applicationsSubject.next(this.__applications);
  }

}
