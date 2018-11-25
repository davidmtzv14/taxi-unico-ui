import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpaComponent } from './components/spa/spa.component';
import { AdminContainerComponent } from '@app/admin/containers/admin-container/admin-container.component';
import { ClientTabComponent } from '@app/admin/components/client-tab/client-tab.component';
import { ClientTabContainerComponent } from '@app/admin/containers/client-tab-container/client-tab-container.component';
import { TaxiTabContainerComponent } from '@app/admin/containers/taxi-tab-container/taxi-tab-container.component';
import { DetailsTabContainerComponent } from '@app/admin/containers/details-tab-container/details-tab-container.component';
import { UserContainerComponent } from '@app/user/containers/user-container/user-container.component';
import { HistorialTabContainerComponent } from '@app/user/containers/historial-tab-container/historial-tab-container.component';
import { ServTabContainerComponent } from '@app/user/containers/serv-tab-container/serv-tab-container.component';
import { PagoTabContainerComponent } from '@app/user/containers/pago-tab-container/pago-tab-container.component';

const routes: Routes = [
  {
    path: '',
    component: SpaComponent,
    children: [
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
        path: 'user',
        component: UserContainerComponent,
        children: [
          {
            path: 'historial',
            component: HistorialTabContainerComponent
          },
          {
            path: 'serv',
            component: ServTabContainerComponent
          },
          {
            path: 'pago',
            component: PagoTabContainerComponent
          }
        ]
      },
      {
        path: '',
        redirectTo: 'admin/clients',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaRoutingModule {}
