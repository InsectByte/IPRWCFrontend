import { Component, OnInit } from '@angular/core';
import {Plan} from "../../shared/Plan/plan.model";
import {PlansService} from "../../shared/Plan/plans.service";

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

  ngOnDestroy() {
    this.planService.getResults().unsubscribe();
  }
}
