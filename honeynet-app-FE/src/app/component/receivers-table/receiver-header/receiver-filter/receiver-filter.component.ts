import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {EmailInfoFilter} from "../../../../interface/emailInfo/EmailInfoFilter";
import {filter} from "rxjs";

@Component({
  selector: 'app-receiver-filter',
  templateUrl: './receiver-filter.component.html',
})
export class ReceiverFilterComponent {
  protected receiverFilterForm:FormGroup = new FormGroup({
    receiver: new FormControl('')
  });

  @Input() isReceiverFilterOpened!:boolean;
  @Output() receiverFilterSubmitEvent : EventEmitter<string> = new EventEmitter<string>();

  filterValue:EmailInfoFilter = {
    receiverFilter:"",
    dateFilters:[]
  };
  emitReceiverFilterSubmitEvent(event: Event) {
    event!.preventDefault();
    const receiverVal:string = this.receiverFilterForm.get('receiver')?.value;
    this.filterValue.receiverFilter = receiverVal;
    this.receiverFilterSubmitEvent.emit(this.filterValue.receiverFilter);
  }

}
