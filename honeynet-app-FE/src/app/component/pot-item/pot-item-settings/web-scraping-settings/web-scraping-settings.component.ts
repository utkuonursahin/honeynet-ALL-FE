import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pot} from "../../../../model/Pot";
import {PotService} from "../../../../service/pot.service";

@Component({
  selector: 'app-web-scraping-settings',
  templateUrl: './web-scraping-settings.component.html'
})
export class WebScrapingSettingsComponent {
  @Output() webScrapingSettingsCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() pot!: Pot;

  constructor(private potService:PotService) {}

  onWebScrapingSettingsCloseClick() {this.webScrapingSettingsCloseEvent.emit(true);}
  onSetupClick(){
    this.potService.setupPot(this.pot.id).subscribe();
    this.webScrapingSettingsCloseEvent.emit(true);
  }
}
