import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

/**
 * Actions we can perform inside the authentication module
 */
export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Successful',
  LoginFailed = '[Auth] Login Failed'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: { username: string; password: string }) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: User) {}
}

export class LoginFailed implements Action {
  readonly type = AuthActionTypes.LoginFailed;
}

export type AuthActions = Login | LoginSuccess | LoginFailed;
