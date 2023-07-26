import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-origin-filter',
  templateUrl: './origin-filter.component.html'
})
export class OriginFilterComponent {
  protected originFilterForm: FormGroup = new FormGroup({
    origin: new FormControl('')
  });

  @Input() isOriginFilterOpened!: boolean;
  @Output() originFilterSubmitEvent: EventEmitter<string> = new EventEmitter<string>();

  emitOriginFilterSubmitEvent(event:Event): void {
    event.preventDefault();
    const origin = this.originFilterForm.get('origin')?.value;
    this.originFilterSubmitEvent.emit(origin);
  }
}
