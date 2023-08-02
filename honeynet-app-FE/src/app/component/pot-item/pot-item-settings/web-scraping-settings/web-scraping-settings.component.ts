import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pot} from "../../../../model/Pot";
import {ServerService} from "../../../../service/server.service";

@Component({
  selector: 'app-web-scraping-settings',
  templateUrl: './web-scraping-settings.component.html'
})
export class WebScrapingSettingsComponent {
  @Output() webScrapingSettingsCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() pot!: Pot;

  constructor(private serverService:ServerService) {}

  onWebScrapingSettingsCloseClick() {this.webScrapingSettingsCloseEvent.emit(true);}
  onSetupClick(){
    this.serverService.setupServer(this.pot.id).subscribe();
    this.webScrapingSettingsCloseEvent.emit(true);
  }
}
