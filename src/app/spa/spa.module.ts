import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';

import { SpaRoutingModule } from './spa-routing.module';
import { SpaComponent } from './components/spa/spa.component';
import { AdminComponentComponent } from '@app/admin/components/admin-component/admin-component.component';
import { AdminContainerComponent } from '@app/admin/containers/admin-container/admin-container.component';
import { ClientTabComponent } from '@app/admin/components/client-tab/client-tab.component';
import { ClientTabContainerComponent } from '@app/admin/containers/client-tab-container/client-tab-container.component';
import { TaxiTabComponent } from '@app/admin/components/taxi-tab/taxi-tab.component';
import { TaxiTabContainerComponent } from '@app/admin/containers/taxi-tab-container/taxi-tab-container.component';
import { DetailsTabComponent } from '@app/admin/components/details-tab/details-tab.component';
import { DetailsTabContainerComponent } from '@app/admin/containers/details-tab-container/details-tab-container.component';

@NgModule({
  declarations: [
    SpaComponent,
    AdminComponentComponent, AdminContainerComponent,
    ClientTabComponent, ClientTabContainerComponent,
    TaxiTabComponent, TaxiTabContainerComponent,
    DetailsTabComponent, DetailsTabContainerComponent
  ],
  imports: [
    CommonModule,
    SpaRoutingModule, CoreModule, SharedModule
  ]
})
export class SpaModule { }
