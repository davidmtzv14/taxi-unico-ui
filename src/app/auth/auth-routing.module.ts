import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormContainerComponent } from './containers/login-form-container/login-form-container.component';
import { SigninFormContainerComponent } from '@app/auth/containers/signin-form-container/signin-form-container.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormContainerComponent
  },
  {
    path: 'signin',
    component: SigninFormContainerComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
