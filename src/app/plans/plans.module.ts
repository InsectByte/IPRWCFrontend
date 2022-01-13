import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './plans.component';
import { PlanslistComponent } from './planslist/planslist.component';
import { PlanslistItemComponent } from './planslist/planslist-item/planslist-item.component';
import {PlansService} from "../shared/Plan/plans.service";



@NgModule({
  declarations: [
    PlansComponent,
    PlanslistComponent,
    PlanslistItemComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [{provide: PlansService}]
})
export class PlansModule { }
