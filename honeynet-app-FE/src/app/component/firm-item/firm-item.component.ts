import {Component, Input} from '@angular/core';
import {Firm} from "../../model/Firm";

@Component({
  selector: 'app-firm-item',
  templateUrl: './firm-item.component.html'
})
export class FirmItemComponent {
  protected selected:boolean = false;
  constructor() {
    this.selected = localStorage.getItem('firm') != null && localStorage.getItem('firm') != undefined;
  }
  @Input() firm!: Firm;
  onFirmSelect(){
    if(this.selected){
      localStorage.removeItem('firm')
    } else {
      localStorage.setItem('firm', JSON.stringify(this.firm));
    }
    window.location.reload();
  }
}
