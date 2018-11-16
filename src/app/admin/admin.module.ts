import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponentComponent } from './components/admin-component/admin-component.component';
import { AdminContainerComponent } from './containers/admin-container/admin-container.component';
import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';
import { ClientTabComponent } from './components/client-tab/client-tab.component';
import { TaxiTabComponent } from './components/taxi-tab/taxi-tab.component';
//import { ServiceDetailsTabComponent } from './components/service-details-tab/service-details-tab.component';
import { ClientTabContainerComponent } from './containers/client-tab-container/client-tab-container.component';
import { TaxiTabContainerComponent } from './containers/taxi-tab-container/taxi-tab-container.component';
//import { ServiceDetailsTabContainerComponent } from './containers/service-details-tab-container/service-details-tab-container.component';
import { DetailsTabContainerComponent } from './containers/details-tab-container/details-tab-container.component';
import { DetailsTabComponent } from './components/details-tab/details-tab.component';

@NgModule({
  declarations: [AdminComponentComponent, AdminContainerComponent, ClientTabComponent, TaxiTabComponent, ClientTabContainerComponent, TaxiTabContainerComponent, DetailsTabContainerComponent, DetailsTabComponent],
  imports: [
    CommonModule, CoreModule, SharedModule
  ]
})
export class AdminModule { }
