import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';

import { SpaRoutingModule } from './spa-routing.module';
import { SpaComponent } from './components/spa/spa.component';

@NgModule({
  declarations: [SpaComponent],
  imports: [
    CommonModule,
    SpaRoutingModule, CoreModule, SharedModule
  ]
})
export class SpaModule { }
