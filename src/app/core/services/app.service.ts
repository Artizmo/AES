// angular modules
import { Injectable } from '@angular/core';

// rxjs
import { Observable, Subject } from 'rxjs';

interface App {
  UUID: string,
  title: string
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  loadedApplications = {};
  private currentApplicationSubject = new Subject<App>();
  public currentApplication$ = this.currentApplicationSubject.asObservable();

  constructor() { }

  load(app: App) {
    if (!this.loadedApplications[app.UUID]) {
      this.loadedApplications[app.UUID] = app;
    }
    this.currentApplicationSubject.next(app);
  }

  unload(app: App) {
    if (this.loadedApplications[app.UUID]) {
      delete this.loadedApplications[app.UUID];
    }
  }

}
