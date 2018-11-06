import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import {
  AuthActionTypes,
  Login,
  LoginFailed,
  LoginSuccess
} from './auth.actions';

/**
 * Effects of our AuthActions in the Auth module
 */
@Injectable()
export class AuthEffects {
  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionTypes.Login),
    map((action: Login) => action.payload),
    mergeMap(login =>
      this.authService.login(login).pipe(
        map(user => new LoginSuccess(user)),
        catchError(() => of(new LoginFailed()))
      )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$: Observable<User> = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    map((action: LoginSuccess) => action.payload),
    tap(user => {
      this.saveUserInSession(user);
      this.router.navigateByUrl('/spa');
    })
  );

  @Effect({ dispatch: false })
  loginFailed$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionTypes.LoginFailed),
    tap(() => {
      console.log('Error login user');
    })
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  saveUserInSession(user: User): void {
    localStorage.setItem('firstName', user.firstName);
    localStorage.setItem('lastName', user.lastName);
  }
}
