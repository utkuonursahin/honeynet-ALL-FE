import { Component } from '@angular/core';
import {ServersService} from "../../service/servers.service";
import {Observable} from "rxjs";
import {GenericResponse} from "../../interface/GenericResponse";
import ServerInfo from "../../model/ServerInfo";

@Component({
  selector: 'app-page-servers',
  templateUrl: './page-servers.component.html'
})
export class PageServersComponent {
  protected servers$ = new Observable<GenericResponse<ServerInfo[]>>();
  displayedColumns: string[] = ['potName','hostName','host','port','status'];
  constructor(private serversService:ServersService) {
    this.servers$ = serversService.getAllServers();
  }

}
