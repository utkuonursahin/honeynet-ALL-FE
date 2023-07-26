import {Component,} from '@angular/core';
import {PotService} from "../../service/pot.service";
import {Pot} from "../../model/Pot";
import {Observable} from "rxjs";
import {GenericResponse} from "../../interface/GenericResponse";
import {Firm} from "../../model/Firm";

@Component({
  selector: 'app-page-pots',
  templateUrl: './page-pots.component.html',
})
export class PagePotsComponent {
  protected pots$: Observable<GenericResponse<Pot[]>> = new Observable<GenericResponse<Pot[]>>();
  private firm:Firm = JSON.parse(localStorage.getItem('firm') || '{}');
  constructor(private potService: PotService) {
    this.pots$ = this.potService.getAllPots(this.firm.id);
  }
}
