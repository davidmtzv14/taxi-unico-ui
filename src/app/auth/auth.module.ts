import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginFormContainerComponent } from './containers/login-form-container/login-form-container.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { SigninFormContainerComponent } from './containers/signin-form-container/signin-form-container.component';


@NgModule({
  declarations: [LoginFormComponent, LoginFormContainerComponent, SigninFormComponent, SigninFormContainerComponent],
  imports: [CommonModule, AuthRoutingModule, CoreModule, SharedModule]
})
export class AuthModule {}
