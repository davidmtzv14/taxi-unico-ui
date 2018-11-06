import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginFormContainerComponent } from './containers/login-form-container/login-form-container.component';


@NgModule({
  declarations: [LoginFormComponent, LoginFormContainerComponent],
  imports: [CommonModule, AuthRoutingModule, CoreModule, SharedModule]
})
export class AuthModule {}
