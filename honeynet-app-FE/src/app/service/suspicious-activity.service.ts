import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {GenericResponse} from "../interface/response/GenericResponse";
import {SuspiciousActivityFilter} from "../interface/suspiciousActivity/SuspiciousActivityFilter";
import {PaginatedSuspiciousActivities} from "../interface/suspiciousActivity/PaginatedSuspiciousActivities";
import {PaginationSettings} from "../interface/PaginationSettings";
import {SuspiciousActivity} from "../model/SuspiciousActivity";

@Injectable({
  providedIn: 'root'
})

export class SuspiciousActivityService {
  private serverUrl = "http://localhost:8080"
  private httpOptions = {
    withCredentials: true,
  };

  constructor(private http: HttpClient) {}

  getSuspiciousActivities(filter: SuspiciousActivityFilter,pagination:PaginationSettings){
    return this.http.post<GenericResponse<PaginatedSuspiciousActivities>>(`${this.serverUrl}/suspicious/client/filter?page=${pagination.currentPage}&size=${pagination.currentSize}`,filter,this.httpOptions);
  }
  getSuspiciousActivity(id:string){
    return this.http.get<GenericResponse<SuspiciousActivity>>(`${this.serverUrl}/suspicious/client/${id}`,{withCredentials:true})
  }
}
