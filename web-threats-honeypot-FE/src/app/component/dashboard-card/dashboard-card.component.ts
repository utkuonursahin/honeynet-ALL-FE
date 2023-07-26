import {Component, Input} from '@angular/core';
import User from "../../interface/User";

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
})
export class DashboardCardComponent {
@Input() user!: User
}
