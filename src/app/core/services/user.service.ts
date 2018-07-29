import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// models
import user from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = 'http://localhost:4300/api/users';
  constructor(private http: HttpClient) { 
    console.log('once?')    
  }

  getUsers() {
    return this.http.get<user[]>(this.baseUrl)
  }
  getUserById(id: number) {
    return this.http.get<user>(`${this.baseUrl}/${id}`)
  }
}
