// angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs
import { BehaviorSubject, Observable } from 'rxjs';

// models
import User from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  baseUrl: string = 'http://localhost:4300/api/users';
  constructor(private http: HttpClient) { }

  setUser(user: User) {
    this.user = user;
  }

  getUser(): Observable<User> {
    return new BehaviorSubject<User>(this.user);
  }

  getUserById(id: number) {
    return this.http.get<User>(`${this.baseUrl}/${id}`)
  }
}
