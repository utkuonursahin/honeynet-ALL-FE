import {Component, Input} from '@angular/core';
import {SuspiciousActivity} from "../../../model/SuspiciousActivity";

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
})
export class TableItemComponent {
  @Input() suspicious!: SuspiciousActivity;
}
