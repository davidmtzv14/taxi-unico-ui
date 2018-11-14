import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

/**
 * Actions we can perform inside the authentication module
 */
export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Successful',
  LoginFailed = '[Auth] Login Failed',
  Signup = '[Auth] Signup',
  SignupSuccess = '[Auth] Signup Successful',
  SignupFailed = '[Auth] Signup Failed'
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

export class Signup implements Action {
	readonly type = AuthActionTypes.Signup;
	constructor(public payload: { firstName: string, lastName: string, email: string, cellphone: string, username: string, password: string }) {}
}

export class SignupSuccess implements Action {
  readonly type = AuthActionTypes.SignupSuccess;
  constructor(public payload: User) {}
}

export class SignupFailed implements Action {
  readonly type = AuthActionTypes.SignupFailed;
}

export type AuthActions = Login | LoginSuccess | LoginFailed | Signup | SignupSuccess | SignupFailed;
