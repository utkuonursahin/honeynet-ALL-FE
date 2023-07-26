import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthResponse} from "../interface/AuthResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username:String,password:String):Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`/auth/login`, {
      username,
      password
    },{withCredentials:true});
  }
}
