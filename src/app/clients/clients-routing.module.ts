import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageClientsComponent } from './Pages/page-clients/page-clients.component';

const clientsRoutes: Routes = [
  { path: '', component: PageClientsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(clientsRoutes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
