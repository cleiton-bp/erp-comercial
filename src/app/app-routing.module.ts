import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TapComponent } from './tap/tap.component';
import { EapComponent } from './eap/eap.component';
import { PmcComponent } from './pmc/pmc.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'tap', component: TapComponent },
  { path: 'eap', component: EapComponent },
  { path: 'pmc', component: PmcComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
