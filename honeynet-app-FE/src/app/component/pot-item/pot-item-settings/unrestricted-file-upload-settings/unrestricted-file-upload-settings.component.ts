import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pot} from "../../../../model/Pot";
import {ServerService} from "../../../../service/server.service";

@Component({
  selector: 'app-unrestricted-file-upload-settings',
  templateUrl: './unrestricted-file-upload-settings.component.html'
})
export class UnrestrictedFileUploadSettingsComponent {
  @Output() ufuSettingsCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() pot!: Pot;

  constructor(private serverService:ServerService) {}

  onUfuSettingsCloseClick() {this.ufuSettingsCloseEvent.emit(true);}
  onSetupClick(){
    this.serverService.setupServer(this.pot.id).subscribe();
    this.ufuSettingsCloseEvent.emit(true);
  }
}
