import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface user {
  id,
  firstName,
  lastName,
  organization
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = 'http://localhost:4300/api/users';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<user[]>(this.baseUrl)
  }
  getUserById(id: number) {
    return this.http.get<user>(`${this.baseUrl}/${id}`)
  }
}
