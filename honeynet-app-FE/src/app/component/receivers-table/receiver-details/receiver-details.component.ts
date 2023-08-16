import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {EmailInfo} from "../../../model/Email-info";

@Component({
  selector: 'app-receiver-details',
  templateUrl: './receiver-details.component.html',
})
export class ReceiverDetailsComponent{
  @Input() selectedInfo!:EmailInfo;
  constructor() {
  }
}
