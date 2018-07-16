import { Injectable } from '@angular/core';

// rxjs
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AesService {
  private title = new Subject<string>();

  constructor() { }

  setPortalTitle(title: string) {
    this.title.next(title);
  }

  getPortalTitle(): Observable<string> {
    return this.title.asObservable();
  }

}
