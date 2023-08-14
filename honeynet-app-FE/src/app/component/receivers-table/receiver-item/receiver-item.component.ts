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
export class ReceiverItemComponent implements OnInit{
  @Input() data!:EmailInfo;
  // @Input() suspiciousData!:SuspiciousActivity[];
  // @Output() spanValueSend:EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    // console.log(this.data,"aaa")
  }

  ngOnInit(): void {
  }

  // @ViewChild('quantitySpan',{static:false})
  // quantitySpan!:ElementRef;
  //
  //
  //
  // getSpanValue(event:MouseEvent){
  //   const spanValue = this.quantitySpan.nativeElement.textContent;
  //   this.spanValueSend.emit(spanValue);
  //   // console.log(spanValue.toString());
  // }

}
