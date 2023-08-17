import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pot} from "../../../../model/Pot";
import {ServerService} from "../../../../service/server.service";
import {FormControl, FormGroup} from "@angular/forms";
import {PotService} from "../../../../service/pot.service";

@Component({
  selector: 'app-web-clone-settings',
  templateUrl: './web-clone-settings.component.html'
})
export class WebCloneSettingsComponent {
  @Input() pot!: Pot;
  @Output() webCloneSettingsCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  protected cloneForm: FormGroup = new FormGroup({
    url: new FormControl(''),
  });

  constructor(private serverService:ServerService, private potService: PotService) {}

  onWebCloneSettingsCloseClick() {
    this.webCloneSettingsCloseEvent.emit(true);
  }

  onSetupClick() {
    this.serverService.setupServer(this.pot.id).subscribe();
  }

  onSubmit(){
    this.potService.cloneSite(this.pot.id,this.cloneForm.value.url).subscribe();
    this.webCloneSettingsCloseEvent.emit(true);
  }
}
