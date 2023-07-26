import {Component, Input} from '@angular/core';
import {Pot} from "../../../model/Pot";

@Component({
  selector: 'app-web-threats-pot',
  templateUrl: './web-threats-pot.component.html',
})
export class WebThreatsPotComponent {
  protected showSettings: boolean = false;
  @Input() pot!: Pot;
  onVisitClick() {
    window.open(this.pot.clientUrl, "_blank");
  }
  onSettingsClick(potName:string){potName === "Web Threats Pot" && this.toggleSettings();}
  toggleSettings() {this.showSettings = !this.showSettings;}
}
