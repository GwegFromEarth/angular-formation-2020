import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePrestationsComponent } from './Pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PageAddPrestationComponent } from './Pages/page-add-prestation/page-add-prestation.component';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';



@NgModule({
  declarations: [PagePrestationsComponent, PageAddPrestationComponent, FormPrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule
  ],
  exports: []
})
export class PrestationsModule { }
