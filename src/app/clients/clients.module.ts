import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePrestationsComponent } from './Pages/page-prestations/page-prestations.component';
import { PageClientsComponent } from './Pages/page-clients/page-clients.component';



@NgModule({
  declarations: [PagePrestationsComponent, PageClientsComponent],
  imports: [
    CommonModule
  ]
})
export class ClientsModule { }
