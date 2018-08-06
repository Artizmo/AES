import { Injectable } from '@angular/core';

// rxjs
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

interface App {
  UUID: string,
  title: string
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public current = new Subject<App>();
  public loaded = {}
  constructor() { }

  load(app: App): Boolean {
    if (!this.loaded[app.UUID]) {
      this.loaded[app.UUID] = app
      this.current.next(app);
      return true;
    } else { return false; }
  }

  unload(app: App): Boolean {
    if (this.loaded[app.UUID]) {
      try {
        delete this.loaded[app.UUID];
        return true;
      } catch (e) {
        return false;
      }
    }
  }

  // getPortalTitle(): Observable<string> {
  //   return this.title.asObservable();
  // }

}
