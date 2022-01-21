import { Component, OnInit } from '@angular/core';
import {Plan} from "../../shared/Plan/plan.model";
import {PlansService} from "../../shared/Plan/plans.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-planslist',
  templateUrl: './planslist.component.html',
  styleUrls: ['./planslist.component.scss']
})
export class PlanslistComponent  {

  plans : Plan[] = [];
  private planSub : Subscription;

  constructor(private planService: PlansService) {
    this.planService.getPlans();
    this.planSub = this.planService.getResults().subscribe(plans => {
      if(plans) {
        this.plans = plans;
      }
    });
  }


  ngOnDestroy() {
    this.planSub.unsubscribe();
  }
}
