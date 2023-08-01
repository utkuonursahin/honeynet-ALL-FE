import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pot} from "../../../model/Pot";

@Component({
  selector: 'app-pot-item-settings',
  templateUrl: './pot-item-settings.component.html'
})
export class PotItemSettingsComponent {
  @Output() settingsCloseEvent = new EventEmitter<boolean>();
  @Input() pot!: Pot;

  emitSettingsCloseEvent(value:boolean) {
    this.settingsCloseEvent.emit(value);
  }
}
