import { Injectable } from '@angular/core';
import {UserService} from "./User/user.service";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements  HttpInterceptor{

  constructor(private _userService: UserService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const TOKEN = this._userService.getJwt();
    if (TOKEN === '' || !TOKEN) {
      return next.handle(req);
    }
    try {
      const CLONED = req.clone({
        setHeaders: {
          Authorization: "Bearer " + TOKEN
        }
      });
      return next.handle(CLONED);
    } catch (e) {
      return next.handle(req);
    }
  }
}
