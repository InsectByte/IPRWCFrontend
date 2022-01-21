import { Component, OnInit } from '@angular/core';
import {GeoService} from "../Geo/geo.service";
import {Geo} from "../Geo/geo.model";
import {Subscription} from "rxjs";
import {NgForm} from "@angular/forms";
import {UserService} from "../../shared/User/user.service";

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent implements OnInit {

  public geos : Geo[] = [];
  private _geoSub : Subscription = new Subscription();

  constructor(private _geoService : GeoService, private _userService : UserService) { }

  ngOnInit(): void {
    this._geoSub = this._geoService.getResults().subscribe((geos) => {
      if (geos) {
        this.geos = geos;
      }
    })
  }

  getGeoLocations(value: string) {
    this._geoService.getGeoLocations(value);
  }

  ngOnDestroy () {
    this._geoSub.unsubscribe();
  }

  debug(valid: any) {
    console.log(valid)
  }

  submit(f: NgForm) {
    if (!f.valid) return;
    let username : string = f.value.name;
    let fullname : string = f.value.fname
    let email : string = f.value.email;
    let password : string = f.value.password;
    let birthdate : Date = f.value.birthdate;
    let zipcode : string = f.value.postalcode;
    let number : string = f.value.housenumber;
    let country : string = f.value.address.countrycode;

    this._userService.createUserForSignup(
      username,
      fullname,
      email,
      password,
      birthdate,
      zipcode,
      number,
      country
    )
  }
}
