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
  plansSubject = new BehaviorSubject<any>(undefined);
  constructor(private http: HttpClient) {}

  getPlans(): void {
    this.http.get(this.URL, {observe: 'response'}).subscribe(
      (response) => {
        let plans : Plan[] = []
        // @ts-ignore
        response.body.forEach(element => {
          plans.push(
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
        this.plansSubject.next(plans);
      }
    )
  }
  getResults(): BehaviorSubject<any> {
    return this.plansSubject;
  }
}
