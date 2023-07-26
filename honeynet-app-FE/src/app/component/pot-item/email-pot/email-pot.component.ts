import {Component, Input} from '@angular/core';
import {Pot} from "../../../model/Pot";

@Component({
  selector: 'app-email-pot',
  templateUrl: './email-pot.component.html'
})
export class EmailPotComponent {
  protected isEmailSettingsOpened: boolean = false;

  @Input() pot!: Pot;
  onSettingsClick(potName:string){potName === "E-Mail Phishing Pot" && this.toggleEmailSettings();}
  toggleEmailSettings() {this.isEmailSettingsOpened = !this.isEmailSettingsOpened;}
}
