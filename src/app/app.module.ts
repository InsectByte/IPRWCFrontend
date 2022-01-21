import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomepageModule} from "./homepage/homepage.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {SnackbarService} from "./shared/Snackbar/snackbar.service";
import {HeaderModule} from "./header/header.module";
import {FooterModule} from "./footer/footer.module";
import {PlansModule} from "./plans/plans.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { SignupModule } from './signup/signup.module';
import {LoginModule} from "./login/login.module";
import { AccountComponent } from './account/account.component';
import { DetailsComponent } from './account/details/details.component';
import { OrdersComponent } from './account/orders/orders.component';
import { AccountheaderComponent } from './account/accountheader/accountheader.component';
import {ShoppingcartModule} from "./shoppingcart/shoppingcart.module";
import {OrdersModule} from "./account/orders/orders.module";
import {AuthInterceptorService} from "./shared/auth-interceptor.service";
import {ContactComponent} from "./contact/contact.component";
import {ContactModule} from "./contact/contact.module";

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    DetailsComponent,
    OrdersComponent,
    AccountheaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    HeaderModule,
    FooterModule,
    PlansModule,
    HttpClientModule,
    ReactiveFormsModule,
    SignupModule,
    LoginModule,
    ShoppingcartModule,
    OrdersModule,
    ContactModule
  ],
  providers: [ {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}},
    {provide: SnackbarService}, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
