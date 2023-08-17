import {Component, EventEmitter, Output} from '@angular/core';
import {EmailInfoFilter} from "../../../interface/EmailInfoFilter";

@Component({
  selector: 'app-receiver-header',
  templateUrl: './receiver-header.component.html',
})
export class ReceiverHeaderComponent {
  @Output() filterEvent:EventEmitter<EmailInfoFilter> = new EventEmitter<EmailInfoFilter>();

  isReceiverFilterOpened: boolean = false;

  protected emailInfofilter:EmailInfoFilter={
    receiverFilter:"",
    dateFilters:[]
  }
  isDateFilterOpened:boolean=false;
  emitFilterEvents(){
    this.filterEvent.emit(this.emailInfofilter);
  }

  toggleReceiverFilter(){
    return this.isReceiverFilterOpened = !this.isReceiverFilterOpened;

  }
  toggleDateFilter(){
    return this.isDateFilterOpened = !this.isDateFilterOpened;
  }
  setDateFilters(dateFilter:string[]){
    this.emailInfofilter.dateFilters = dateFilter;
    this.emitFilterEvents();
  }
  setReceiverFilter(receiverFilter: string){
    this.emailInfofilter.receiverFilter = receiverFilter;
    this.toggleReceiverFilter();
    this.emitFilterEvents();
  }

}
