import {Component} from '@angular/core';
import {Chart, registerables} from "chart.js";
import { WordCloudController, WordElement } from 'chartjs-chart-wordcloud';
Chart.register(WordCloudController, WordElement,...registerables);
@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html'
})
export class PageDashboardComponent{}
