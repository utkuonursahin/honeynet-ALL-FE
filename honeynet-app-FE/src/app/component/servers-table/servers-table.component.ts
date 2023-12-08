import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {GenericResponse} from "../../interface/response/GenericResponse";
import ServerInfo from "../../model/ServerInfo";
import {ServerService} from "../../service/server.service";

@Component({
  selector: 'app-servers-table',
  templateUrl: './servers-table.component.html'
})
export class ServersTableComponent {
  protected servers$ = new Observable<GenericResponse<ServerInfo[]>>();
  constructor(private serversService:ServerService) {
    this.servers$ = serversService.getAllServers();
  }
  onStatusChange(){
    this.servers$ = this.serversService.getAllServers();
  }
}
