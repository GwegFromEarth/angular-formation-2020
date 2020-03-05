import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagePrestationsComponent } from './Pages/page-prestations/page-prestations.component';
import { PageAddPrestationComponent } from './Pages/page-add-prestation/page-add-prestation.component';

const prestationsRoutes: Routes = [
  {
    path: '',
    component: PagePrestationsComponent,
    data: { title: 'Prestations', subtitle:'Toutes les prestations'}
  },
  {
    path: 'add',
    component: PageAddPrestationComponent,
    data: { title: 'Prestations', subtitle:'Ajouter une prestation'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(prestationsRoutes)],
  exports: [RouterModule]
})
export class PrestationsRoutingModule { }
