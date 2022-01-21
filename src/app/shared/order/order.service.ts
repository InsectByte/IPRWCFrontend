import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SnackbarService} from "../Snackbar/snackbar.service";
import {environment} from "../../../environments/environment";
import {BehaviorSubject} from "rxjs";
import {UserService} from "../User/user.service";
import {Order} from "./order.model";
import {isElementScrolledOutsideView} from "@angular/cdk/overlay/position/scroll-clip";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _url: string = environment.serverurl + environment.endpoints.order;
  private _orderSub : BehaviorSubject<any> = new BehaviorSubject<any>(undefined);

  constructor(private _http : HttpClient, private _snackbar : SnackbarService, private _userService: UserService) {
  }

  getOrders(): void {
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this._userService.getJwt());
    this._http.get(this._url, {headers: headers}).subscribe((response: any) => {
      let orders : Order[] = []
      response.forEach((order : Order) => {
        orders.push(order);
      })
      this._orderSub.next(orders);
    })
  }

  getOrderSub(): BehaviorSubject<any> {
    return this._orderSub;
  }
}
