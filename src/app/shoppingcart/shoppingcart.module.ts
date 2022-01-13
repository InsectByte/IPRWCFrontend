import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingcartComponent } from './shoppingcart.component';
import { ShoppingcartListComponent } from './shoppingcart-list/shoppingcart-list.component';
import { ShoppingcartListItemComponent } from './shoppingcart-list/shoppingcart-list-item/shoppingcart-list-item.component';



@NgModule({
  declarations: [
    ShoppingcartComponent,
    ShoppingcartListComponent,
    ShoppingcartListItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShoppingcartModule { }
