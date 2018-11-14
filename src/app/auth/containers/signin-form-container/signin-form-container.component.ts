import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/models/app.state';
import { Signup } from '@app/auth/state/auth.actions';

@Component({
  selector: 'app-signin-form-container',
  templateUrl: './signin-form-container.component.html',
  styleUrls: ['./signin-form-container.component.scss']
})
export class SigninFormContainerComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  signup(signup: { firstName: string, lastName: string, email: string, cellphone: string, username: string, password: string }): void {
  	console.log(signup);
    this.store.dispatch(new Signup(signup));
  }

}
