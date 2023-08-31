import {Component, Input} from '@angular/core';
import {EmailInfo} from "../../../model/EmailInfo";
import {EmailInfoService} from "../../../service/email-info.service";

@Component({
  selector: 'app-receivers-table-item',
  templateUrl: './receivers-table-item.component.html',
  providers:[EmailInfoService]
})
export class ReceiversTableItemComponent {
  @Input() data!:EmailInfo;
  constructor(private emailInfoService:EmailInfoService) {
  }
  handleClickDelete(id:string){
    this.emailInfoService.deleteEmail(id).subscribe();
    window.location.reload();
  }
}
