// angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// services
import { UserService } from 'services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public jwt;
  constructor(private userService: UserService, private cookie: CookieService, private http: HttpClient) {
    this.jwt = new JwtHelperService();
  }

  isAuthenticated() {
    if (this.cookie.get('aes-token')) {
      return true;
    } else {
      this.redirect();
      return false;
    }
  }

  setUser() {
    let token = this.cookie.get('aes-token')
    if (token) {
      this.userService.setUser(this.jwt.decodeToken(token))
    }
  }

  getToken() {
    return this.cookie.get('aes-token')
  }

  logout() {
    this.cookie.delete('aes-token')
    this.redirect();
  }

  redirect() {
    window.location.href = 'http://localhost:4300/login.html';
  }
}
