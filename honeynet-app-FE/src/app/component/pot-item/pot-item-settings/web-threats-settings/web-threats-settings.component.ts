import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pot} from "../../../../model/Pot";
import {ServerService} from "../../../../service/server.service";

@Component({
  selector: 'app-web-threats-settings',
  templateUrl: './web-threats-settings.component.html'
})
export class WebThreatsSettingsComponent {
  @Output() webThreatsSettingsCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() pot!: Pot;

  constructor(private serverService:ServerService) {}

  onWebThreatsSettingsCloseClick() {this.webThreatsSettingsCloseEvent.emit(true);}
  onSetupClick(){
    this.serverService.setupServer(this.pot.id).subscribe(res => {
    });
    this.webThreatsSettingsCloseEvent.emit(true);
  }
}
