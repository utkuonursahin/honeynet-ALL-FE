import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {GenericResponse} from "../interface/GenericResponse";
import ServerInfo from "../model/ServerInfo";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private serverUrl = "http://localhost:8080";
  constructor(private http:HttpClient){}

  getAllServers():Observable<GenericResponse<ServerInfo[]>>{
    return this.http.get<GenericResponse<ServerInfo[]>>(`${this.serverUrl}/server-info`,{withCredentials: true});
  }

  public setupServer(potId:string):Observable<GenericResponse<ServerInfo>>{
    return this.http.post<GenericResponse<ServerInfo>>(`${this.serverUrl}/server-info/setup?potId=${potId}`,{},{withCredentials: true});
  }

  shutdownServer(server:ServerInfo):Observable<GenericResponse<ServerInfo>>{
    return this.http.post<GenericResponse<ServerInfo>>(`${this.serverUrl}/server-info/shutdown?id=${server.id}`,null,{withCredentials: true});
  }

  startServer(server:ServerInfo):Observable<GenericResponse<ServerInfo>>{
    return this.http.post<GenericResponse<ServerInfo>>(`${this.serverUrl}/server-info/start?id=${server.id}`,null,{withCredentials: true});
  }

  terminateServer(server:ServerInfo):Observable<GenericResponse<string>>{
    return this.http.delete<GenericResponse<string >>(`${this.serverUrl}/server-info/terminate?id=${server.id}`,{withCredentials: true});
  }
}
