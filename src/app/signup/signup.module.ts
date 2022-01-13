import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SignupformComponent } from './signupform/signupform.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    SignupComponent,
    SignupformComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class SignupModule { }
