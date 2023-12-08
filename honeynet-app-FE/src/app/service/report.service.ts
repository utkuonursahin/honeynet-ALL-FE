import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GenericResponse} from "../interface/response/GenericResponse";
import {ReportSettings} from "../interface/report/ReportSettings";
import {Report} from "../model/Report";

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private serverUrl = "http://localhost:8080";
  constructor(private http:HttpClient) { }

  getAllReports():Observable<GenericResponse<Report[]>>{
    return this.http.get<GenericResponse<Report[]>>(`${this.serverUrl}/report`,{withCredentials: true});
  }

  getReport(id:string):Observable<GenericResponse<any>>{
    return this.http.get<GenericResponse<any>>(`${this.serverUrl}/report/${id}`,{withCredentials: true});
  }

  createReport(reportSettings : ReportSettings):Observable<GenericResponse<Report>>{
    return this.http.post<GenericResponse<Report>>(`${this.serverUrl}/report`,reportSettings,{withCredentials: true});
  }

  deleteReport(id:string):Observable<GenericResponse<boolean>>{
    return this.http.delete<GenericResponse<boolean>>(`${this.serverUrl}/report/${id}`,{withCredentials: true});
  }
}
