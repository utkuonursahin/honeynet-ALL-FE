import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {GenericResponse} from "../interface/GenericResponse";
import {HttpClient} from "@angular/common/http";
import {EmailListener} from "../interface/EmailListener";
import {EmailListenerStatus} from "../enum/EmailListenerStatus";

@Injectable({
  providedIn: 'root'
})
export class EmailListenerService {
  private readonly serverUrl:string = 'http://localhost:8080';
  constructor(private http:HttpClient) { }

  public getEmailListeners(potId:string, firmId:string):Observable<GenericResponse<EmailListener[]>>{
    return this.http.get<GenericResponse<EmailListener[]>>(`${this.serverUrl}/pot/phishing-email?potId=${potId}&firmId=${firmId}`,{withCredentials: true});
  }

  public addEmailListener(potId:string, firmId:string, email:string,password:string):Observable<GenericResponse<EmailListener>>{
    return this.http.post<GenericResponse<EmailListener>>(`${this.serverUrl}/pot/phishing-email?potId=${potId}&firmId=${firmId}`,{email,password},{withCredentials: true});
  }

  public updateEmailListener(potId:string, firmId:string,emailListener:EmailListener):Observable<GenericResponse<EmailListener>>{
    emailListener.status = emailListener.status === EmailListenerStatus.LISTEN ? EmailListenerStatus.STOP : EmailListenerStatus.LISTEN;
    return this.http.patch<GenericResponse<EmailListener>>(`${this.serverUrl}/pot/phishing-email/${emailListener.id}?potId=${potId}&firmId=${firmId}`,emailListener,{withCredentials: true});
  }

  public deleteEmailListener(potId:string, firmId:string,id:string):Observable<GenericResponse<EmailListener>>{
    return this.http.delete<GenericResponse<EmailListener>>(`${this.serverUrl}/pot/phishing-email/${id}?potId=${potId}&firmId=${firmId}`,{withCredentials: true});
  }
}
