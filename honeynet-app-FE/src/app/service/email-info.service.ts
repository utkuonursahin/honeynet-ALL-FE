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

  public addEmailInfo(newEmail:EmailInfo){
    return this.http.post<GenericResponse<EmailInfo>>(`${this.serverUrl}/receivers`,newEmail,{withCredentials:true});
  }

  public getFilteredMails(filter:EmailInfoFilter,pagination:PaginationSettings):Observable<GenericResponse<PaginatedEmailInfo>>{
    return this.http.post<GenericResponse<PaginatedEmailInfo>>(`${this.serverUrl}/receivers/filter?page=${pagination.currentPage}&size=${pagination.currentSize}`,filter,{withCredentials:true})
  }

  public getEmailbyReceiver(receiver:string):Observable<GenericResponse<EmailInfo[]>>{
    return this.http.get<GenericResponse<EmailInfo[]>>(`${this.serverUrl}/receivers/${receiver}`,{withCredentials:true})
  }
  public getAllEmails(){
    return this.http.get<GenericResponse<PaginatedEmailInfo>>(`${this.serverUrl}/receivers`,{withCredentials:true})
  }
  public getEmail(id:string):Observable<GenericResponse<EmailInfo>>{
    return this.http.get<GenericResponse<EmailInfo>>(`${this.serverUrl}/receivers/${id}`,{withCredentials:true})
  }

  public updateEmail(id:string,newEmail:EmailInfo):Observable<GenericResponse<EmailInfo>>{
    return this.http.patch<GenericResponse<EmailInfo>>(`${this.serverUrl}/receivers/${id}`,newEmail,{withCredentials:true});
  }
  public deleteEmail(id:string):Observable<GenericResponse<EmailInfo>>{
    return this.http.delete<GenericResponse<EmailInfo>>(`${this.serverUrl}/receivers/${id}`,{withCredentials:true});

  }
  public deleteAllEmail():Observable<GenericResponse<EmailInfo[]>>{
    return  this.http.delete<GenericResponse<EmailInfo[]>>(`${this.serverUrl}/receivers`);
  }


}
