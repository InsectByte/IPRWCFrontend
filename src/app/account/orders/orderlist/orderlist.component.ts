import {Component, OnDestroy, OnInit} from '@angular/core';
import {Order} from "../../../shared/order/order.model";
import {Subscription} from "rxjs";
import {OrderService} from "../../../shared/order/order.service";

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OrderlistComponent implements OnInit, OnDestroy {

  orders: Order[] = [];
  private _orderSub : Subscription = new Subscription();

  constructor(private _orderService : OrderService) { }

  ngOnInit(): void {
    this._orderService.getOrders();
    this._orderSub = this._orderService.getOrderSub().subscribe( (orders : Order[]) => {
      this.orders = orders;
    })
  }

  ngOnDestroy(): void {
    this._orderSub.unsubscribe()
  }
}
