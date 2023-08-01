import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pot} from "../../../../model/Pot";
import {PotService} from "../../../../service/pot.service";
import {Firm} from "../../../../model/Firm";
import {User} from "../../../../model/User";
import ServerInfo from "../../../../model/ServerInfo";

@Component({
  selector: 'app-web-threats-settings',
  templateUrl: './web-threats-settings.component.html'
})
export class WebThreatsSettingsComponent {
  @Output() webThreatsSettingsCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() pot!: Pot;

  constructor(private potService:PotService) {}

  onWebThreatsSettingsCloseClick() {this.webThreatsSettingsCloseEvent.emit(true);}
  onSetupClick(){
    this.potService.setupPot(this.pot.id).subscribe(res => {
    });
    this.webThreatsSettingsCloseEvent.emit(true);
  }
}
