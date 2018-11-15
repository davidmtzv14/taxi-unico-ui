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
    return this.http.post<User>('http://10.23.27.141:5000/login', payload);
  }

  signup(signup: { firstName: string, lastName: string, email: string, cellphone: string, username: string, password: string }): Observable<User> {
  	const payload = {
	  ...signup,
	  registrationType: 'U'
 	 };
  	console.log(payload);
  	return this.http.post<User>('http://10.23.27.141:5000/register', payload);
  }
}
