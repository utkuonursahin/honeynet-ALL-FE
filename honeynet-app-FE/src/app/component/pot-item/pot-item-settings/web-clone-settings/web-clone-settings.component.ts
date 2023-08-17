import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pot} from "../../../../model/Pot";
import {ServerService} from "../../../../service/server.service";
import {FormControl, FormGroup} from "@angular/forms";
import {PotService} from "../../../../service/pot.service";
import {ToastrService} from "ngx-toastr";

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

  constructor(private serverService:ServerService, private potService: PotService, private toastrService:ToastrService) {}

  onWebCloneSettingsCloseClick() {
    this.webCloneSettingsCloseEvent.emit(true);
  }

  onSetupClick() {
    this.serverService.setupServer(this.pot.id).subscribe();
  }

  onSubmit(){
    this.potService.cloneSite(this.pot.id,this.cloneForm.value.url).subscribe(
      ({data}) => {
        if(data.success){
          this.toastrService.success(`You\'ve successfully cloned ${this.cloneForm.value.url}`, 'Success',{
            toastClass:'w-[25vw] min-h-16 px-4 py-2 font-Rubik rounded bg-green-500 text-neutral-100',
          });
        } else {
          this.toastrService.error(`Clone ${this.cloneForm.value.url} failed`, 'Failure',{
            toastClass:'w-[25vw] min-h-16 px-4 py-2 font-Rubik rounded bg-red-500 text-neutral-100',
          });
        }
        this.webCloneSettingsCloseEvent.emit(true);
      }
    );

  }
}
