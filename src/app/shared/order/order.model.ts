import {Plan} from "../Plan/plan.model";

export class Order {
  constructor(public id: string, public plan: Plan, public created_at: Date) {}
}
