import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GenericResponse} from "../interface/GenericResponse";
import {EmailInfo} from "../model/Email-info";
import {EmailInfoFilter} from "../interface/EmailInfoFilter";
import {PaginationSettings} from "../interface/PaginationSettings";
import {PaginatedEmailInfo} from "../interface/PaginatedEmailInfo";

@Injectable({
  providedIn: 'root'
})
export class EmailInfoService {
  private serverUrl:String = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getFilteredMails(filter:EmailInfoFilter,pagination:PaginationSettings):Observable<GenericResponse<PaginatedEmailInfo>>{
    return this.http.post<GenericResponse<PaginatedEmailInfo>>(`${this.serverUrl}/receivers/filter?page=${pagination.currentPage}&size=${pagination.currentSize}`,filter,{withCredentials:true})
  }
  public deleteEmail(id:string):Observable<GenericResponse<EmailInfo>>{
    return this.http.delete<GenericResponse<EmailInfo>>(`${this.serverUrl}/receivers/${id}`,{withCredentials:true});
  }
}
