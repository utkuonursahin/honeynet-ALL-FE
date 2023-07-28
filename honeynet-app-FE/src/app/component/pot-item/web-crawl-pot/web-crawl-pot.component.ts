import {Component, Input} from '@angular/core';
import {Pot} from "../../../model/Pot";

@Component({
  selector: 'app-web-crawl-pot',
  templateUrl: './web-crawl-pot.component.html',
})
export class WebCrawlPotComponent {
  protected showSettings: boolean = false;
  @Input() pot!: Pot;
  onVisitClick(url:string) {

    window.open(url, "_blank");
  }
  onSettingsClick(potName:string){potName === "Web Scraping Pot" && this.toggleSettings();}
  toggleSettings() {this.showSettings = !this.showSettings;}
}
