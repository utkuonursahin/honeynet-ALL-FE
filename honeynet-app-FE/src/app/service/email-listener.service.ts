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

  public getEmailListeners():Observable<GenericResponse<EmailListener[]>>{
    return this.http.get<GenericResponse<EmailListener[]>>(`${this.serverUrl}/pot/phishing-email`,{withCredentials: true});
  }

  public addEmailListener(email:string,password:string):Observable<GenericResponse<EmailListener>>{
    return this.http.post<GenericResponse<EmailListener>>(`${this.serverUrl}/pot/phishing-email`,{email,password},{withCredentials: true});
  }

  public updateEmailListener(emailListener:EmailListener):Observable<GenericResponse<EmailListener>>{
    emailListener.status = emailListener.status === EmailListenerStatus.LISTEN ? EmailListenerStatus.STOP : EmailListenerStatus.LISTEN;
    return this.http.put<GenericResponse<EmailListener>>(`${this.serverUrl}/pot/phishing-email/${emailListener.id}`,emailListener,{withCredentials: true});
  }

  public deleteEmailListener(id:string):Observable<GenericResponse<EmailListener>>{
    return this.http.delete<GenericResponse<EmailListener>>(`${this.serverUrl}/pot/phishing-email/${id}`,{withCredentials: true});
  }
}
