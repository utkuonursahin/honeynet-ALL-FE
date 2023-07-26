import {Component} from '@angular/core';
import {Device} from "../../interface/Device";
import devicesData from "../../../assets/data/devices.json";

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html'
})
export class DevicesComponent{
  protected devices: Device[] = devicesData;
}
