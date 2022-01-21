import { Injectable } from '@angular/core';
import {User} from "./user.model";
import {BehaviorSubject, catchError, throwError} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {SnackbarService} from "../Snackbar/snackbar.service";
import {Router} from "@angular/router";
import {Md5} from "ts-md5";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _jwt : string | null  = null;
  private _jwtSub : BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  private _userSub : BehaviorSubject<any> = new BehaviorSubject<any>(undefined);

  private _url : string = environment.serverurl + environment.endpoints.user;

  constructor(private _http : HttpClient, private _snackbar : SnackbarService, private _router : Router) {
    this._jwt = localStorage.getItem('jwt');
    if(this._jwt != "" && this._jwt != null) {
      this.validateToken(this._jwt);
    }
    this._jwtSub.next(this._jwt);
  }

  createUserForSignup(username : string, fullname : string, email: string, password: string, birthdate : Date, zipcode : string,
                      number : string, country : string) : void {
    let user = new User(null, username, fullname, email, Md5.hashStr(password), birthdate, zipcode, number, country)
    this._http.post(this._url, user, {observe: "response"}).pipe(
      catchError((err) => {
        this._snackbar.errorSnackbar("Something went wrong :(. Perhaps try a different email or username?", "")
        console.error(err);
        return throwError(err);
      })
    )
      .subscribe((response: any) => {
      if (!response) return;
      if (response.status != 200) {
        this._snackbar.errorSnackbar("Account could not be created", "");
        return
      }
      this._snackbar.affirmativeSnackbar("Account created successfully", "");
      this._router.navigate(['login']);
    })
  }

  authenticate(username : string, password : string) : void {
    this._http.post<string>(environment.serverurl + environment.endpoints.auth,
      {
        "username": username,
        "password": Md5.hashStr(password)
      }).pipe(
        catchError((err) => {
          this._snackbar.errorSnackbar("Invalid username or password", "")
          console.error(err);
          return throwError(err);
        })
    ).subscribe((response: any) => {
      this._jwt = response['jwt'];
      if (typeof this._jwt === "string") {
        this._jwtSub.next(this._jwt);
        localStorage.setItem('jwt', this._jwt)
        this._snackbar.affirmativeSnackbar("Logged in successfully", "");
        this._router.navigate(["/home"]);
      }
    })
  }

  getUser() : void {
    this._http.get(this._url).subscribe((response : any) => {
      let user = new User(
        response['id'],
        response['username'],
        response['fullname'],
        response['email'],
        response['password'],
        response['birthdate'],
        response['zipcode'],
        response['number'],
        response['country']
      );
      this._userSub.next(user);
    });
  }

  getJwtSub() : BehaviorSubject<any> {
    return this._jwtSub;
  }
  getJwt() : string | null{
    return this._jwt;
  }

  getUserSub() : BehaviorSubject<any> {
    return this._userSub;
  }

  signout(): void {
    this._jwt = null;
    localStorage.setItem("jwt", "");
    this._jwtSub.next(this._jwt);
    this._router.navigate(["/home"])
  }

  validateToken(jwt : string | null): void {
    if(jwt == "" || jwt == null) return;
    this._http.get(this._url +"/validate").pipe(
      catchError((err) => {
        this._snackbar.errorSnackbar("Session Outdated, Singing out", "")
        this.signout();
        this._jwtSub.next(this.getJwt());
        console.error(err);
        return throwError(err);
      })
    );
  }
}
