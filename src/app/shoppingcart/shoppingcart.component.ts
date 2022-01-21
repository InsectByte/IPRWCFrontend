import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingcartService} from "../shared/Shoppingcart/shoppingcart.service";
import {Cart} from "../shared/Shoppingcart/cart.model";
import {Subscription} from "rxjs";
import {SnackbarService} from "../shared/Snackbar/snackbar.service";

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit, OnDestroy {

  private _cartSub : Subscription = new Subscription();
  shoppingCart : Cart = new Cart([], 0);

  constructor(private _cartService : ShoppingcartService, private _snackbar : SnackbarService) { }

  ngOnInit(): void {
    this._cartSub = this._cartService.getCartSub().subscribe(
      (cart : Cart) => {
        this.shoppingCart = cart;
      }
    )
  }

  ngOnDestroy() : void {
    this._cartSub.unsubscribe();
  }

  applyCoupon() {
    this._snackbar.errorSnackbar("Invalid Coupon Code.", "");
  }

  createOrder() {
    this._cartService.createOrder();
  }
}
