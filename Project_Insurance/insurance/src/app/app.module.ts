import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageModule } from './components/landing-page/landing-page.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './components/home/home.module';
import { AboutModule } from './components/about/about.module';
import { ContactModule } from './components/contact/contact.module';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { InsuranceProductModule } from './components/insurance-product/insurance-product.module';
import { QuoteModule } from './components/quote/quote.module';
import { ResourceModule } from './components/resource/resource.module';
import { UserProfileModule } from './components/user-profile/user-profile.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    HomeModule,
    AboutModule,
    ContactModule,
    HeaderModule,
    FooterModule,
    InsuranceProductModule,
    QuoteModule,
    ResourceModule,
    UserProfileModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
