import {Component, EventEmitter, Input, Output} from '@angular/core';
import ServerInfo from "../../../model/ServerInfo";
import {ServerService} from "../../../service/server.service";

@Component({
  selector: 'app-status-select',
  templateUrl: './status-select.component.html'
})
export class StatusSelectComponent{
  @Input() server!: ServerInfo;
  @Output() statusChangeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  protected selectedStatus: string = this.server?.status;
  constructor(private serverService:ServerService) {}

  onValueChange(event:any,server:ServerInfo){
    if(event === "INACTIVE"){
      this.serverService.shutdownServer(server).subscribe(() => {
        this.statusChangeEvent.emit(true);
      });
    } else if(event === "ACTIVE"){
      this.serverService.startServer(server).subscribe(() => {
        this.statusChangeEvent.emit(true);
      });
    }

  }
}
