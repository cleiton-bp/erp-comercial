import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TapComponent } from './tap/tap.component';
import { EapComponent } from './eap/eap.component';
import { PmcComponent } from './pmc/pmc.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'tap', component: TapComponent },
  { path: 'eap', component: EapComponent },
  { path: 'pmc', component: PmcComponent },
  { path: '**', component: NotFoundComponent }, // Redirect to dashboard for any unknown routes
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
