import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GenericResponse} from "../interface/GenericResponse";
import {Firm} from "../model/Firm";

@Injectable({
  providedIn: 'root'
})
export class FirmService {
  private serverUrl:String = 'http://localhost:8080';
  constructor(private http: HttpClient) {}
  public getAllFirms():Observable<GenericResponse<Firm[]>>{
      return this.http.get<GenericResponse<Firm[]>>(`${this.serverUrl}/firm`,{withCredentials: true});
  }
}
