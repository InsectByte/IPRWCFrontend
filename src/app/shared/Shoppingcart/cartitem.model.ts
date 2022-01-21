import {Plan} from "../Plan/plan.model";

export class Cartitem {
  constructor(public quantity : number, public plan : Plan, public id? : string,) {
  }
}
