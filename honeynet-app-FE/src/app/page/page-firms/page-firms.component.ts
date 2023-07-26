import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {GenericResponse} from "../../interface/GenericResponse";
import {Firm} from "../../model/Firm";
import {FirmService} from "../../service/firm.service";

@Component({
  selector: 'app-page-firms',
  templateUrl: './page-firms.component.html'
})
export class PageFirmsComponent {
  protected firms$ : Observable<GenericResponse<Firm[]>> = new Observable<GenericResponse<Firm[]>>();

  constructor(firmService:FirmService) {
    this.firms$ = firmService.getAllFirms();
  }
}
