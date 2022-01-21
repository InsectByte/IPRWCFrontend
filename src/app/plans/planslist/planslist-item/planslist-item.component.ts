import {Component, Input, OnInit} from '@angular/core';
import {Plan} from "../../../shared/Plan/plan.model";
import {ShoppingcartService} from "../../../shared/Shoppingcart/shoppingcart.service";

@Component({
  selector: 'app-planslist-item',
  templateUrl: './planslist-item.component.html',
  styleUrls: ['./planslist-item.component.scss']
})
export class PlanslistItemComponent implements OnInit {

  @Input() plan: Plan = new Plan("", "", "",false,  0, 0, 0, 0);

  constructor(private _cartService : ShoppingcartService) {
  }

  ngOnInit(): void {
  }

  onAddToCart() : void {
    this._cartService.addToCart(this.plan);
}

}
