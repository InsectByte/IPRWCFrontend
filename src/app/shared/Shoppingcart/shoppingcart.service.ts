import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserService} from "../User/user.service";
import {BehaviorSubject, catchError, throwError} from "rxjs";
import {Cart} from "./cart.model";
import {Plan} from "../Plan/plan.model";
import {SnackbarService} from "../Snackbar/snackbar.service";
import {Cartitem} from "./cartitem.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {
  private _url : string = environment.serverurl + environment.endpoints.cart;
  private _cartSub : BehaviorSubject<any> = new BehaviorSubject<any>(undefined);

  constructor(private _http : HttpClient, private _userService : UserService, private _snackbar : SnackbarService) {
    this.getShoppingCart();
  }

  getShoppingCart() {
    if(this._userService.getJwt() != "" && this._userService.getJwt() != null) {
      this._http.get(this._url).subscribe((response : any) => {
        let cart : Cart = new Cart(
          response['cartItems'],
          response['totalCost']
        );
        this._cartSub.next(cart);
      })
    }
  }

  getCartSub() : BehaviorSubject<any> {
    return this._cartSub;
  }

  addToCart(plan : Plan) : void {
    if(this._userService.getJwt() != "" && this._userService.getJwt() != null) {
      let headers = new HttpHeaders().set("Authorization", "Bearer " + this._userService.getJwt());
      console.log(plan.id)
      this._http.post(this._url + "/add", {
        "productId": plan.id,
        "quantity": 1
      }, {headers: headers}).pipe(
        catchError((err) => {
          this._snackbar.errorSnackbar("Product could not be found", "");
          console.error(err);
          return throwError(err);
        })
      ).subscribe((response: any) => {
        this._snackbar.affirmativeSnackbar("Product successfully added to cart", "");
        this.getShoppingCart();
      })
    }else {
      this._snackbar.errorSnackbar("You need to be logged in to perform this action!", "");
    }
  }

  removeFromCart(cartItem : Cartitem) {
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this._userService.getJwt());
    this._http.delete(this._url + "/remove", {body : {
      "id": cartItem.id
      }, headers: headers}).pipe(
      catchError((err) => {
        this._snackbar.errorSnackbar("Product could not be found in cart", "");
        console.error(err);
        return throwError(err);
      })
    ).subscribe( (response : any) => {
      this._snackbar.affirmativeSnackbar("Product successfully removed from cart", "");
      this.getShoppingCart();
    })
  }

  updateAmount(cartItem : Cartitem, quantity : number) {
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this._userService.getJwt());
    this._http.patch(this._url + "/edit", {
      "id": cartItem.id,
      "value": quantity
    }, {headers: headers}).pipe(
      catchError((err) => {
        this._snackbar.errorSnackbar("Quantity could not be updated", "");
        console.error(err);
        return throwError(err);
      })
    ).subscribe((response : any) => {
      this.getShoppingCart();
    })
  }

  createOrder() {
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this._userService.getJwt());
    this._http.post(environment.serverurl + environment.endpoints.order + "/create", {}, {headers: headers}).pipe(
      catchError((err) => {
        this._snackbar.errorSnackbar("Could not create order", "");
        console.error(err);
        return throwError(err);
      })
    ).subscribe((response : any) => {
      this._snackbar.affirmativeSnackbar("Order created successfully", "");
      this.getShoppingCart();
    })
  }
}
