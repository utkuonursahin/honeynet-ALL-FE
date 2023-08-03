import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GenericResponse} from "../interface/GenericResponse";
import {SuspiciousActivityGroupByCategoryDTO} from "../interface/SuspiciousActivityGroupByCategoryDTO";

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http:HttpClient) { }

  getGroupedSuspiciousCategoryChartData():Observable<GenericResponse<SuspiciousActivityGroupByCategoryDTO[]>>{
    return this.http.get<GenericResponse<SuspiciousActivityGroupByCategoryDTO[]>>('http://localhost:8080/chart/group-by-suspicious-categories',{withCredentials:true});
  }
}
