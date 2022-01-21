import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../shared/User/user.service";
import {Subscription} from "rxjs";
import {User} from "../../shared/User/user.model";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  private _userSub : Subscription = new Subscription();

  username : string = "";
  email : string = "";
  name : string = "";
  country : string = "";
  postalcode : string = "";

  constructor(private _userService : UserService) { }

  ngOnInit(): void {
    this._userSub = this._userService.getUserSub().subscribe((response : User) => {
      if(typeof response === "object") {
        this.username = response.username;
        this.email = response.email;
        this.name = response.fullname;
        this.postalcode = response.zipcode + " " + response.number;
        this.country = response.country;
      }
    });
    this._userService.getUser();
  }

  ngOnDestroy() : void{
    this._userSub.unsubscribe();
  }


}
