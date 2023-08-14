import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {EmailInfo} from "../../../model/Email-info";

@Component({
  selector: 'app-receiver-details',
  templateUrl: './receiver-details.component.html',
})
export class ReceiverDetailsComponent implements OnChanges{
  @Input() selectedInfo!:EmailInfo;

  constructor() {
    // console.log(this.spanValue)
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if ('spanValue'in changes){
    //   console.log(this.spanValue)
    // }
    if ('selectedInfo' in changes){
    }
  }


  // @Input() infosForMail!:EmailInfo;
}
