import {Component} from '@angular/core';
import {EmailInfoService} from "../../service/email-info.service";

@Component({
  selector: 'app-page-email-receivers',
  templateUrl: './page-email-receivers.component.html',
  providers:[EmailInfoService]

})
export class PageEmailReceiversComponent {
}
