import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared/User/user.service";

@Component({
  selector: 'app-accountheader',
  templateUrl: './accountheader.component.html',
  styleUrls: ['./accountheader.component.scss']
})
export class AccountheaderComponent implements OnInit {

  constructor(private _userSevice : UserService) { }

  ngOnInit(): void {
  }

  signout() {
    this._userSevice.signout();
  }
}
