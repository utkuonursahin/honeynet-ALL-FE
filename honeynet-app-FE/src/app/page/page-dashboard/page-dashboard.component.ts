import {Component, OnInit} from '@angular/core';
import {Chart, registerables} from "chart.js";
Chart.register(...registerables);
@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html'
})
export class PageDashboardComponent{}
