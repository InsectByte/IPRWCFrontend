import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../shared/User/user.service";

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  constructor(private _userService : UserService) { }

  ngOnInit(): void {
  }

  submit(f: NgForm) {
    let username : string = f.value.name;
    let password : string = f.value.password;
    this._userService.authenticate(username, password);
  }
}
