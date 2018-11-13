import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(login: { username: string; password: string }): Observable<User> {
  const payload = {
  ...login,
  registrationType: 'U'
  };
    var x = this.http.post<User>('http://10.23.18.103:5000/login', payload);
    console.log(x)
    return x;
  }
}
