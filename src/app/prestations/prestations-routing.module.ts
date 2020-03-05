import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagePrestationsComponent } from './Pages/page-prestations/page-prestations.component';

const prestationsRoutes: Routes = [
  {
    path: '',
    component: PagePrestationsComponent,
    data: { title: 'Prestations', subtitle:'Toutes les prestations'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(prestationsRoutes)],
  exports: [RouterModule]
})
export class PrestationsRoutingModule { }
