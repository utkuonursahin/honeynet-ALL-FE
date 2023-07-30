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

  public getAllPots():Observable<GenericResponse<Pot[]>>{
    return this.http.get<GenericResponse<Pot[]>>(`${this.serverUrl}/pot`,{withCredentials: true});
  }

  public setupPot(potId:string):any{
    return this.http.post(`${this.serverUrl}/pot/setup?potId=${potId}`,{},{withCredentials: true});
  }
}
