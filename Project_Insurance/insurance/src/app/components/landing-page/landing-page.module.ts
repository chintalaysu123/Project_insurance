import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { LoginModule } from '../login/login.module';
import { QuoteModule } from '../quote/quote.module';



@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    LoginModule,
    QuoteModule
  ],
  exports: [LandingPageComponent]
})
export class LandingPageModule { }
