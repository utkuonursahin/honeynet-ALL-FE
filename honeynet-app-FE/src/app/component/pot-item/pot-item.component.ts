import {Component, Input} from '@angular/core';
import {Pot} from "../../model/Pot";

@Component({
  selector: 'app-pot-item',
  templateUrl: './pot-item.component.html',
})
export class PotItemComponent{
  constructor() {}
  @Input() pot!: Pot;
}
