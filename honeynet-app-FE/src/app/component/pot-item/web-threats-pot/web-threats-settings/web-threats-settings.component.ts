import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pot} from "../../../../model/Pot";
import {PotService} from "../../../../service/pot.service";
import {Firm} from "../../../../model/Firm";
import {User} from "../../../../model/User";

@Component({
  selector: 'app-web-threats-settings',
  templateUrl: './web-threats-settings.component.html'
})
export class WebThreatsSettingsComponent {
  private firm: Firm = JSON.parse(localStorage.getItem("firm") || '{}');
  @Output() settingsCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() pot!: Pot;

  constructor(private potService:PotService) {}

  onSettingsCloseClick() {this.settingsCloseEvent.emit(true);}
  onSetupClick(){
    this.potService.setupPot(this.pot.id,this.firm.id).subscribe();
    this.settingsCloseEvent.emit(true);
  }
}
