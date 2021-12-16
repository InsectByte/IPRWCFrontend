import {Component, Input, OnInit} from '@angular/core';
import {Plan} from "../../../shared/plan.model";

@Component({
  selector: 'app-planslist-item',
  templateUrl: './planslist-item.component.html',
  styleUrls: ['./planslist-item.component.scss']
})
export class PlanslistItemComponent implements OnInit {

  @Input() plan: Plan = new Plan("", "", "",false,  0, 0, 0, 0);

  constructor() {
  }

  ngOnInit(): void {
  }

}
