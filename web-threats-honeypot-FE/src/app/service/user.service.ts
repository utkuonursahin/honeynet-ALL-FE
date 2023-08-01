import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GenericResponse} from "../interface/GenericResponse";
import User from "../interface/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  getAllUsers(){
    //withCredentials might be unnecessary here
    return this.http.get<GenericResponse<User[]>>(`http://localhost:8081/user`,{withCredentials:true})
  }
}
