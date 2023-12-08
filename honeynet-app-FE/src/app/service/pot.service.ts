import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GenericResponse} from "../interface/response/GenericResponse";
import {Pot} from "../model/Pot";
import {EmailListener} from "../interface/EmailListener";
import {EmailListenerStatus} from "../enum/EmailListenerStatus";
import CloneResponse from "../interface/response/CloneResponse";

@Injectable({
    providedIn: 'root'
})
export class PotService {
	private serverUrl:String = 'http://localhost:8080';
	constructor(private http: HttpClient) { }

  public getAllPots():Observable<GenericResponse<Pot[]>>{
    return this.http.get<GenericResponse<Pot[]>>(`${this.serverUrl}/pot`,{withCredentials: true});
  }

  public getEmailListeners(potId:string):Observable<GenericResponse<EmailListener[]>>{
    return this.http.get<GenericResponse<EmailListener[]>>(`${this.serverUrl}/pot/phishing-email?potId=${potId}`,{withCredentials: true});
  }

  public addEmailListener(potId:string,email:string,password:string):Observable<GenericResponse<EmailListener>>{
    return this.http.post<GenericResponse<EmailListener>>(`${this.serverUrl}/pot/phishing-email?potId=${potId}`,{email,password},{withCredentials: true});
  }

  public updateEmailListener(potId:string,emailListener:EmailListener):Observable<GenericResponse<EmailListener>>{
    emailListener.status = emailListener.status === EmailListenerStatus.LISTEN ? EmailListenerStatus.STOP : EmailListenerStatus.LISTEN;
    return this.http.patch<GenericResponse<EmailListener>>(`${this.serverUrl}/pot/phishing-email/${emailListener.id}?potId=${potId}`,emailListener,{withCredentials: true});
  }

  public deleteEmailListener(potId:string,id:string):Observable<GenericResponse<EmailListener>>{
    return this.http.delete<GenericResponse<EmailListener>>(`${this.serverUrl}/pot/phishing-email/${id}?potId=${potId}`,{withCredentials: true});
  }

  public cloneSite(potId:string,url:string):Observable<GenericResponse<CloneResponse>>{
    return this.http.post<GenericResponse<CloneResponse>>(`${this.serverUrl}/pot/web-clone?potId=${potId}`,{cloneUrl:url},{withCredentials: true});
  }
}
