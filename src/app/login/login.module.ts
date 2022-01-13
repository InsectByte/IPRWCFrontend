import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginformComponent } from './loginform/loginform.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    LoginComponent,
    LoginformComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class LoginModule { }
