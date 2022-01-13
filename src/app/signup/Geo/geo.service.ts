import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {BehaviorSubject, repeat, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Geo} from "./geo.model";

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  private _url : string = environment.serverurl + environment.endpoints.geo;
  private _cachedGeo : Geo[] = [];
  private _geoSubject : BehaviorSubject<any> = new BehaviorSubject<any>(undefined);

  constructor(private _http : HttpClient) {}

  getGeoLocations(postalcode : string) : void {
    this._cachedGeo = [];
     this._http.get(this._url + "?postalcode=" + postalcode, {observe: 'response'}).subscribe(response => {
       if (response.status == 200 && response.body != null) {
         // @ts-ignore
         response.body.forEach((element : any) => {
           this._cachedGeo.push(
             new Geo(
               element['postalcode'],
               element['name'],
               element['countrycode'],
               element['adminName1']
             )
           )
         })
       }
     })
    this._geoSubject.next(this._cachedGeo);
  }

  getResults(): BehaviorSubject<any> {
    return this._geoSubject;
  }
}
