import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponentComponent } from './components/user-component/user-component.component';
import { UserContainerComponent } from './containers/user-container/user-container.component';
import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [UserComponentComponent, UserContainerComponent],
  imports: [
    CommonModule, CoreModule, SharedModule
  ]
})
export class AdminModule { }
