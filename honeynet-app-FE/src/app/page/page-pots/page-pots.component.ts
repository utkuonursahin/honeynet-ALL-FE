import {Component,} from '@angular/core';
import {PotService} from "../../service/pot.service";
import {Pot} from "../../model/Pot";
import {Observable} from "rxjs";
import {GenericResponse} from "../../interface/GenericResponse";
import {User} from "../../model/User";

@Component({
  selector: 'app-page-pots',
  templateUrl: './page-pots.component.html',
})
export class PagePotsComponent {
  protected pots$: Observable<GenericResponse<Pot[]>> = new Observable<GenericResponse<Pot[]>>();
  private user:User = JSON.parse(localStorage.getItem('user') || '{}');
  constructor(private potService: PotService) {
    this.pots$ = this.potService.getAllPots();
  }
}
