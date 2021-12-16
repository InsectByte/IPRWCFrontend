import { Component, OnInit } from '@angular/core';
import {Plan} from "../../shared/plan.model";
import {PlansService} from "../../shared/plans.service";

@Component({
  selector: 'app-planslist',
  templateUrl: './planslist.component.html',
  styleUrls: ['./planslist.component.scss']
})
export class PlanslistComponent implements OnInit {

  plans : Plan[] = [];

  constructor(private planService: PlansService) { }

  ngOnInit(): void {
    this.planService.getResults().subscribe(plans => {
      if(plans) {
        this.plans = plans;
      }
    });
  }
  logPlans() {
    console.log(this.plans);
  }
}
