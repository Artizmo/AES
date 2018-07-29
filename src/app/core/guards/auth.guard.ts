import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthService } from 'auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      window.location.href = 'http://localhost:4300/login.html';
      return false;
    }
    return true;
  }
}
