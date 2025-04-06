import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ImageTextBlockComponentComponent } from './image-text-block-component/image-text-block-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TapComponent } from './tap/tap.component';
import { EapComponent } from './eap/eap.component';
import { PmcComponent } from './pmc/pmc.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
