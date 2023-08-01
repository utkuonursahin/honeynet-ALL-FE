import {Component, Input} from '@angular/core';
import {Pot} from "../../model/Pot";

@Component({
  selector: 'app-pot-item',
  templateUrl: './pot-item.component.html',
})
export class PotItemComponent{
  protected showSettings = false;
  constructor() {}
  @Input() pot!: Pot;
}
