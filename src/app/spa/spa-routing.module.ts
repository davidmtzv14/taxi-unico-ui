import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpaComponent } from './components/spa/spa.component';
import { AdminContainerComponent } from '@app/admin/containers/admin-container/admin-container.component';
import { ClientTabComponent } from '@app/admin/components/client-tab/client-tab.component';
import { ClientTabContainerComponent } from '@app/admin/containers/client-tab-container/client-tab-container.component';
import { TaxiTabContainerComponent } from '@app/admin/containers/taxi-tab-container/taxi-tab-container.component';
import { DetailsTabContainerComponent } from '@app/admin/containers/details-tab-container/details-tab-container.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminContainerComponent,
    children: [
      {
        path: 'clients',
        component: ClientTabContainerComponent
      },
      {
        path: 'taxis',
        component: TaxiTabContainerComponent
      },
      {
        path: 'details',
        component: DetailsTabContainerComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'admin/clients',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaRoutingModule {}
