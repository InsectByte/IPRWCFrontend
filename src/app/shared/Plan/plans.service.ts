import { Injectable } from '@angular/core';
import {Plan} from "./plan.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  private URL : string = environment.serverurl + environment.endpoints.plans;

  cachedPlans: Plan[] = [];
  plansSubject = new BehaviorSubject<any>(undefined);
  constructor(private http: HttpClient) {
    this.getPlans();
  }

  getPlans(): void {
    this.http.get(this.URL, {observe: 'response'}).subscribe(
      (response) => {
        // console.log(response);
        // @ts-ignore
        response.forEach(element => {
          this.cachedPlans.push(
            new Plan(
              element['id'],
              element['name'],
              element['description'],
              element['recommended'],
              element['cpuCount'],
              element['ramAmount'],
              element['storageAmount'],
              element['price'])
          );
        })
      }
    )
    this.plansSubject.next(this.cachedPlans)
  }
  getResults(): BehaviorSubject<any> {
    return this.plansSubject;
  }
  getCachedPlans(): Plan[] {
    return this.cachedPlans;
  }
}
