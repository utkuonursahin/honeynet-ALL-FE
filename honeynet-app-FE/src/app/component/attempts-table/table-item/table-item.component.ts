import {Component, Input} from '@angular/core';
import {SuspiciousActivity} from "../../../model/SuspiciousActivity";

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
})
export class TableItemComponent {
  protected readonly rowStyle: string = "max-w-min truncate text-neutral-100 hover:bg-sky-900 px-2 hover:rounded-md transition-all duration-300";
  @Input() suspicious!: SuspiciousActivity;
}
