import {Component, EventEmitter, Input, Output} from '@angular/core';
import {EmailInfoFilter} from "../../../../interface/emailInfo/EmailInfoFilter";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-filter-date',
  templateUrl: './filter-date.component.html'
})
export class FilterDateComponent {
  protected dateFilterForm: FormGroup = new FormGroup({
    dateFrom: new FormControl<String>(new Date(1685577600000).toString()),
    dateTo: new FormControl<String>(new Date().toString())
  });
  @Input() isDateFilterOpened: boolean = false;
  @Output() dateFilterChangeEvent: EventEmitter<string[]> = new EventEmitter<string[]>();

  emitDateFilterChangeEvent(){
    this.dateFilterChangeEvent.emit([
      new Date(this.dateFilterForm.get('dateFrom')?.value).toISOString(),
      new Date(this.dateFilterForm.get('dateTo')?.value).toISOString()
    ]);
  }

  clearDateFilter(){
    this.dateFilterForm.reset();
    this.dateFilterForm.get('dateFrom')?.setValue(new Date(1685577600000).toISOString());
    this.dateFilterForm.get('dateTo')?.setValue(new Date().toISOString());
    this.emitDateFilterChangeEvent();
  }
}
