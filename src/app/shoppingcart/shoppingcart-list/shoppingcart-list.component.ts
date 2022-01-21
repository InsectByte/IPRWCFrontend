import {Component, Input, OnInit} from '@angular/core';
import {ShoppingcartService} from "../../shared/Shoppingcart/shoppingcart.service";
import {Cart} from "../../shared/Shoppingcart/cart.model";
import {Subscription} from "rxjs";
import {Cartitem} from "../../shared/Shoppingcart/cartitem.model";

@Component({
  selector: 'app-shoppingcart-list',
  templateUrl: './shoppingcart-list.component.html',
  styleUrls: ['./shoppingcart-list.component.scss']
})
export class ShoppingcartListComponent {

  @Input('cart') cartItems : Cartitem[] = [];
  private _cartSub : Subscription = new Subscription();

  constructor(private _cartService : ShoppingcartService) {
  }

  removeFromCart(cartItem: Cartitem) {
    this._cartService.removeFromCart(cartItem)
  }

  updateQuantity(cartItem: Cartitem, value: string) {
    this._cartService.updateAmount(cartItem, +value);
  }
}
