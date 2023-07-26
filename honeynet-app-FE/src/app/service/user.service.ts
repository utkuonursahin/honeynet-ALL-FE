import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GenericResponse} from "../interface/GenericResponse";
import {User} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private serverUrl:String = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getMe():Observable<GenericResponse<User>>{
    return this.http.get<GenericResponse<User>>(`${this.serverUrl}/user/who-am-i`,{withCredentials:true});
  }

  updateMe(user:User){
    return this.http.patch<GenericResponse<User>>(`${this.serverUrl}/user/${user.id}`, user,{withCredentials: true});
  }
}
