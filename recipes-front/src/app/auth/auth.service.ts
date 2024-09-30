import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthCredentials } from './auth-interface';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  apiUrl = 'http://localhost:4000';
  logIn(credentials: AuthCredentials) {
    return this.http
      .post(`${this.apiUrl}/auth/login`, credentials, {
        observe: 'response',
      })
      .subscribe((data) => console.log(data));
  }
}
