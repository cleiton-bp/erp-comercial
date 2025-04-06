import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageTextBlockComponentComponent } from './components/image-text-block-component/image-text-block-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TapComponent } from './tap/tap.component';
import { EapComponent } from './eap/eap.component';
import { PmcComponent } from './pmc/pmc.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ImageTextBlockComponentComponent,
    DashboardComponent,
    TapComponent,
    EapComponent,
    PmcComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
