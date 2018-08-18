// angular modules
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// rxjs
import { ReplaySubject } from 'rxjs';

interface App {
  UUID: string,
  title: string,
  path: string
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
    current: { UUID: '', title: '', path: ''}
  };
  private __applicationsSubject = new ReplaySubject();
  public applications$ = this.__applicationsSubject.asObservable();

  constructor(private router: Router) { }

  load(app: App) {
    if (!this.__applications.loaded[app.UUID]) {
      this.__applications.loaded[app.UUID] = app;
    }
    this.__applications.current = this.__applications.loaded[app.UUID];
    this.__applicationsSubject.next(this.__applications);
    console.log('state', this.__applications.loaded)
  }

  unload(app?: App) {
    console.log('app', app)
    app = app || this.__applications.current;
    if (this.__applications.loaded[app.UUID]) {
      delete this.__applications.loaded[app.UUID];
    }
    this.switch();
    this.__applicationsSubject.next(this.__applications);
    console.log('state', this.__applications.loaded)
  }

  switch() {
    // if there are no apps, nav to base URL
    if (!Object.keys(this.__applications.loaded).length) {
      this.router.navigateByUrl('/');
    // if there are apps, nav to next app
    } else {
      let nextKey = Object.keys(this.__applications.loaded)[0]
      this.router.navigateByUrl(`/${this.__applications.loaded[nextKey].path}`);
    }
  }

}
