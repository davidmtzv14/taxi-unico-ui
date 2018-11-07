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
    return this.http.post<User>('url.ejemmplo.com', login);
  }
}
