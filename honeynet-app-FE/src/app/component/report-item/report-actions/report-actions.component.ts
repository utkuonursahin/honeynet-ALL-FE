import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-report-actions',
  templateUrl: './report-actions.component.html',
})
export class ReportActionsComponent {
  @Output() protected reportOpenEvent = new EventEmitter<boolean>();
  @Output() protected reportDeleteEvent = new EventEmitter<boolean>();

  onOpenClick() {
    this.reportOpenEvent.emit(true);
  }

  onDeleteClick() {
    this.reportDeleteEvent.emit(true);
  }
}
