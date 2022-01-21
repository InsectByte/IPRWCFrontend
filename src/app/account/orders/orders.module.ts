import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderlistComponent } from './orderlist/orderlist.component';



@NgModule({
    declarations: [
        OrderlistComponent
    ],
    exports: [
        OrderlistComponent
    ],
    imports: [
        CommonModule
    ]
})
export class OrdersModule { }
