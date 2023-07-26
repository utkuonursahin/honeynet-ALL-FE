import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../model/User";
import {GenericResponse} from "../interface/GenericResponse";

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private serverUrl:String = 'http://localhost:8080';

	constructor(private http: HttpClient) { }

  login(formData:FormData):Observable<GenericResponse<User>>{
		return this.http.post<GenericResponse<User>>(`${this.serverUrl}/login`, formData,{withCredentials: true});
	}
  checkIsAuthenticated():Observable<GenericResponse<boolean>>{
    return this.http.get<GenericResponse<boolean>>(`${this.serverUrl}/user/is-authenticated`,{withCredentials:true});
  }
  logout():Observable<GenericResponse<User>>{
    return this.http.get<GenericResponse<User>>(`${this.serverUrl}/logout`,{withCredentials:true})
  }
}
