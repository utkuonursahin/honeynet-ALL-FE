import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GenericResponse} from "../interface/GenericResponse";
import {User} from "../model/User";
import UserUpdateDTO from "../interface/user/UserUpdateDTO";
import {UserUpdateResponseDTO} from "../interface/user/UserUpdateResponseDTO";
import UserResponseDTO from "../interface/user/UserResponseDTO";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private serverUrl:String = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getMe():Observable<GenericResponse<UserResponseDTO>>{
    return this.http.get<GenericResponse<UserResponseDTO>>(`${this.serverUrl}/user/who-am-i`,{withCredentials:true});
  }

  updateMe(userUpdateDto: UserUpdateDTO, id:string):Observable<GenericResponse<UserUpdateResponseDTO>>{
    return this.http.patch<GenericResponse<UserUpdateResponseDTO>>(`${this.serverUrl}/user/${id}`, userUpdateDto,{withCredentials: true});
  }
}
