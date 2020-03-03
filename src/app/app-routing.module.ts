import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLoginComponent } from './login/Pages/page-login/page-login.component';
import { PageClientsComponent } from './clients/Pages/page-clients/page-clients.component';
import { PagePrestationsComponent } from './prestations/Pages/page-prestations/page-prestations.component';
import { PageNotFoundComponent } from './page-not-found/Pages/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'login', component: PageLoginComponent },
  { path: 'prestations', component: PagePrestationsComponent },
  { path: 'clients', component: PageClientsComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
