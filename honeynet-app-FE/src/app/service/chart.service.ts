import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GenericResponse} from "../interface/response/GenericResponse";
import {SuspiciousActivityGroupByCategoryDTO} from "../interface/chart/SuspiciousActivityGroupByCategoryDTO";
import {SuspiciousActivityGroupByOriginSourceDTO} from "../interface/chart/SuspiciousActivityGroupByOriginSourceDTO";
import {
  SuspiciousActivityGroupByOriginCountryDTO
} from "../interface/chart/SuspiciousActivityGroupByOriginCountryDTO";
import ServerInfoGroupByStatusDTO from "../interface/chart/ServerInfoGroupByStatusDTO";

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  constructor(private http:HttpClient) { }

  getSuspiciousActivitiesGroupedByCategoryChartData(since:string):Observable<GenericResponse<SuspiciousActivityGroupByCategoryDTO[]>>{
    return this.http.get<GenericResponse<SuspiciousActivityGroupByCategoryDTO[]>>(`http://localhost:8080/chart/group-by-suspicious-categories?since=${since}`,{withCredentials:true});
  }
  getSuspiciousActivitiesGroupedByOriginSources(since:string):Observable<GenericResponse<SuspiciousActivityGroupByOriginSourceDTO[]>>{
    return this.http.get<GenericResponse<SuspiciousActivityGroupByOriginSourceDTO[]>>(`http://localhost:8080/chart/group-by-suspicious-origin-sources?since=${since}`,{withCredentials:true});
  }
  getSuspiciousActivitiesGroupedByOriginCountries(since:string):Observable<GenericResponse<SuspiciousActivityGroupByOriginCountryDTO[]>>{
    return this.http.get<GenericResponse<SuspiciousActivityGroupByOriginCountryDTO[]>>(`http://localhost:8080/chart/group-by-suspicious-origin-countries?since=${since}`,{withCredentials:true});
  }

  getServerInfoGroupByStatus():Observable<GenericResponse<ServerInfoGroupByStatusDTO[]>>{
    return this.http.get<GenericResponse<ServerInfoGroupByStatusDTO[]>>('http://localhost:8080/chart/group-by-server-status',{withCredentials:true});
  }
}
