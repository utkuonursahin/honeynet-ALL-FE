import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {GenericResponse} from "../interface/GenericResponse";
import ServerInfo from "../model/ServerInfo";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  private serverUrl = "http://localhost:8080";
  constructor(private http:HttpClient) { }

  getAllServers():Observable<GenericResponse<ServerInfo[]>>{
    return this.http.get<GenericResponse<ServerInfo[]>>(`${this.serverUrl}/server-info`,{withCredentials: true});
  }
}
