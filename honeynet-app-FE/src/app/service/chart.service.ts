import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GenericResponse} from "../interface/GenericResponse";
import {SuspiciousActivityGroupByCategoryDTO} from "../interface/SuspiciousActivityGroupByCategoryDTO";
import {SuspiciousActivityGroupByOriginDTO} from "../interface/SuspiciousActivityGroupByOriginDTO";

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  constructor(private http:HttpClient) { }

  getSuspiciousActivitiesGroupedByCategoryChartData(date:string):Observable<GenericResponse<SuspiciousActivityGroupByCategoryDTO[]>>{
    return this.http.get<GenericResponse<SuspiciousActivityGroupByCategoryDTO[]>>(`http://localhost:8080/chart/group-by-suspicious-categories?since=${date}`,{withCredentials:true});
  }

  getSuspiciousActivitiesGroupedByOrigin(since:string):Observable<GenericResponse<SuspiciousActivityGroupByOriginDTO[]>>{
    return this.http.get<GenericResponse<SuspiciousActivityGroupByOriginDTO[]>>(`http://localhost:8080/chart/group-by-suspicious-origins?since=${since}`,{withCredentials:true});
  }
}
