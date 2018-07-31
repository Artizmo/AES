import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  isAuthenticated() {
    // check for cookie
    // check for cookie expiry
    // intercept http service with cookie in header
    // get user data from token
    if (document.cookie) {
      return true
    } else {
      return false
    }
  }
}
