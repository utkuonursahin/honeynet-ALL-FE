import {Component, Input} from '@angular/core';
import {Device} from "../../../interface/Device";

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
})
export class DeviceItemComponent {
  @Input() device!: Device;

}
