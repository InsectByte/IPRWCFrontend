import {Plan} from "../Plan/plan.model";
import {Cartitem} from "./cartitem.model";

export class Cart {
  constructor(public cartItems : Cartitem[], public totalCost : number) {}
}
