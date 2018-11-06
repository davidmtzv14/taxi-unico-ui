import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  login(login: {
    username: string;
    password: string;
  }): Observable<User> {
    return of({
      firstName: 'test',
      lastName: 'test'
    });
  }
}
