import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {EmailInfo} from "../../../model/Email-info";
import {EmailInfoService} from "../../../service/email-info.service";
import {PaginatedEmailInfo} from "../../../interface/PaginatedEmailInfo";
import {GenericResponse} from "../../../interface/GenericResponse";
import {PaginationSettings} from "../../../interface/PaginationSettings";
import {SuspiciousActivity} from "../../../model/SuspiciousActivity";

@Component({
  selector: 'app-receiver-item',
  templateUrl: './receiver-item.component.html',
  providers:[EmailInfoService]
})
export class ReceiverItemComponent{
  @Input() data!:EmailInfo;
  constructor(private emailInfoService:EmailInfoService) {
  }
  handleClickDelete(id:string){
    this.emailInfoService.deleteEmail(id).subscribe();
    window.location.reload();
  }
}
