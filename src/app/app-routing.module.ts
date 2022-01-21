import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {AboutComponent} from "./about/about.component";
import { PlansComponent } from './plans/plans.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {AccountComponent} from "./account/account.component";
import {DetailsComponent} from "./account/details/details.component";
import {OrdersComponent} from "./account/orders/orders.component";
import {ShoppingcartComponent} from "./shoppingcart/shoppingcart.component";

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'plans', component: PlansComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'account', component: AccountComponent, children: [
      {path: 'details', component: DetailsComponent},
      {path: 'orders', component: OrdersComponent},
      {path: '', redirectTo: 'details', pathMatch: 'full'}
    ]},
  {path: 'cart', component: ShoppingcartComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
