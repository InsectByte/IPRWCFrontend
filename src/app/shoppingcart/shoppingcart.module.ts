import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingcartComponent } from './shoppingcart.component';
import { ShoppingcartListComponent } from './shoppingcart-list/shoppingcart-list.component';



@NgModule({
  declarations: [
    ShoppingcartComponent,
    ShoppingcartListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShoppingcartModule { }
