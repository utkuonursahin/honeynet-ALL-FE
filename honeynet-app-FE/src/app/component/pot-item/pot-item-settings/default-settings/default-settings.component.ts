import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pot} from "../../../../model/Pot";
import {ServerService} from "../../../../service/server.service";

@Component({
  selector: 'app-default-settings',
  templateUrl: './default-settings.component.html'
})
export class DefaultSettingsComponent {
  @Output() settingsCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() pot!: Pot;

  constructor(private serverService:ServerService) {}

  onSettingsCloseClick() {this.settingsCloseEvent.emit(true);}
  onSetupClick(){
    this.serverService.setupServer(this.pot.id).subscribe();
    this.settingsCloseEvent.emit(true);
  }
}
