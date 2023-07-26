import {Component, Input} from '@angular/core';
import {SuspiciousActivity} from "../../../model/SuspiciousActivity";

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html'
})
export class DetailsModalComponent {
  @Input() suspicious!: SuspiciousActivity;
}
