import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GenericResponse} from "../interface/GenericResponse";
import {Pot} from "../model/Pot";

@Injectable({
    providedIn: 'root'
})
export class PotService {
	private serverUrl:String = 'http://localhost:8080';
	constructor(private http: HttpClient) { }

  public getAllPots(firmId?:string):Observable<GenericResponse<Pot[]>>{
    if(firmId === undefined){
      return this.http.get<GenericResponse<Pot[]>>(`${this.serverUrl}/pot`,{withCredentials: true});
    }
    return this.http.get<GenericResponse<Pot[]>>(`${this.serverUrl}/pot?firmId=${firmId}`,{withCredentials: true});
  }

  public setupPot(potId:string,firmId:string):any{
    return this.http.post(`${this.serverUrl}/pot/setup?potId=${potId}&firmId=${firmId}`,{},{withCredentials: true});
  }
}
