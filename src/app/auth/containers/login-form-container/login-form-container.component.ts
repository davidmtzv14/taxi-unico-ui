import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/models/app.state';
import { Login } from '@app/auth/state/auth.actions';

@Component({
  selector: 'app-login-form-container',
  templateUrl: './login-form-container.component.html',
  styleUrls: ['./login-form-container.component.scss']
})
export class LoginFormContainerComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  login(login: { username: string; password: string }): void {
  	console.log("login emitted");
    this.store.dispatch(new Login(login));
  }
}
