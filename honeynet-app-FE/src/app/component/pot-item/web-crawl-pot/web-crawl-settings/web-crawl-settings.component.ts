import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Firm} from "../../../../model/Firm";
import {Pot} from "../../../../model/Pot";
import {PotService} from "../../../../service/pot.service";

@Component({
  selector: 'app-web-crawl-settings',
  templateUrl: './web-crawl-settings.component.html'
})
export class WebCrawlSettingsComponent {
  private firm: Firm = JSON.parse(localStorage.getItem("user") || '{}')?.firm;
  @Output() settingsCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() pot!: Pot;

  constructor(private potService:PotService) {}

  onSettingsCloseClick() {this.settingsCloseEvent.emit(true);}
  onSetupClick(){
    this.potService.setupPot(this.pot.id,this.firm.id).subscribe();
    this.settingsCloseEvent.emit(true);
  }
}
