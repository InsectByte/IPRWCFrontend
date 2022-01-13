import { Injectable } from '@angular/core';
import {User} from "./user.model";
import {BehaviorSubject, Subject, Subscription, zip} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SnackbarService} from "../Snackbar/snackbar.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _jwt : string | undefined  = undefined;
  private _jwtSub : BehaviorSubject<any> = new BehaviorSubject<any>(undefined);

  private _url : string = environment.serverurl + environment.endpoints.user;

  constructor(private _http : HttpClient, private _snackbar : SnackbarService, private _router : Router) { }

  createUserForSignup(username : string, fullname : string, email: string, password: string, birthdate : Date, zipcode : string,
                      number : string, country : string) : void {
    let user = new User(null, username, fullname, email, password, birthdate, zipcode, number, country)
    this._http.post(this._url, user).subscribe((response: any) => {
      this._snackbar.affirmativeSnackbar("Account created successfully", "");
      this._router.navigate(['login']);
    })
  }

  authenticate(username : string, password : string) : void {
    this._http.post(environment.serverurl + environment.endpoints.auth,
      {
        "username": username,
        "password": password
      },
      {observe: "response"}).subscribe((response : any) => {
        if (!response) return;
        if (response.status != 200) {
          this._snackbar.errorSnackbar("Failed to authenticate", "");
          return;
        }
        this._jwt = response.body['jwt'];
        this._jwtSub.next(this._jwt);
        this._snackbar.affirmativeSnackbar("Logged in successfully", "");
        this._router.navigate([''])
    })
  }

  getJwt() : BehaviorSubject<any> {
    return this._jwtSub;
  }
}
