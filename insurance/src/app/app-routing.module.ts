import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { InsuranceProductComponent } from './components/insurance-product/insurance-product.component';
import { ResourceComponent } from './components/resource/resource.component';
import { CustomerSupportComponent } from './components/customer-support/customer-support.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component'; 
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'insurance', component: InsuranceProductComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'resource', component: ResourceComponent },
  { path: 'support', component: CustomerSupportComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
