import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {GenericResponse} from "../interface/GenericResponse";
import {SuspiciousActivityFilter} from "../interface/SuspiciousActivityFilter";
import {PaginatedSuspiciousActivities} from "../interface/PaginatedSuspiciousActivities";
import {PaginationSettings} from "../interface/PaginationSettings";

@Injectable({
  providedIn: 'root'
})

export class SuspiciousActivityService {
  private serverUrl = "http://localhost:8080"
  private httpOptions = {
    withCredentials: true,
  };

  constructor(private http: HttpClient) {}


  getSuspiciousActivities(filter: SuspiciousActivityFilter,pagination:PaginationSettings, firmId?:string){
    if(firmId === undefined){
      return this.http.post<GenericResponse<PaginatedSuspiciousActivities>>(`${this.serverUrl}/suspicious/client/filter?page=${pagination.currentPage}&size=${pagination.currentSize}`,filter,this.httpOptions);
    }
    return this.http.post<GenericResponse<PaginatedSuspiciousActivities>>(`${this.serverUrl}/suspicious/client/filter?firmId=${firmId}&page=${pagination.currentPage}&size=${pagination.currentSize}`,filter,this.httpOptions);
  }
}
