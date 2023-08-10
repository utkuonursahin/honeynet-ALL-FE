import {Component, OnInit} from '@angular/core';
import {ChartService} from "../../../service/chart.service";
import {Chart} from "chart.js";
import {
  SuspiciousActivityGroupByOriginCountryDTO
} from "../../../interface/chart/SuspiciousActivityGroupByOriginCountryDTO";

@Component({
  selector: 'app-suspicious-origin-country',
  templateUrl: './suspicious-origin-country.component.html',
})
export class SuspiciousOriginCountryComponent implements OnInit {
  protected suspActsGroupedByOriginCountryChart: any;
  protected noDataFound: boolean = false;

  constructor(private chartService: ChartService) {}

  createSuspActsGroupedByOriginCountryChart(incomingData: SuspiciousActivityGroupByOriginCountryDTO[]) {
    this.suspActsGroupedByOriginCountryChart?.destroy();
    !incomingData.length ? this.noDataFound = true : this.noDataFound = false;
    this.suspActsGroupedByOriginCountryChart = new Chart('suspActsGroupedByOriginCountryChart', {
      type: 'wordCloud',
      data: {
        labels: incomingData
        .filter(activity => activity.country !== null)
        .map(activity => activity.country),
        datasets: [{
          label: 'Request Countries',
          data: incomingData
          .filter(activity => activity.country !== null)
          .map(activity => parseInt(activity.count)),
          color: [
            '#3b82f6',
            '#f5f5f5',
            '#22c55e',
            '#eab308',
            '#f43f5e',
            '#c084fc',
          ],
          size: incomingData.filter(activity => activity.country !== null).map(activity => parseInt(activity.count) *10),
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        devicePixelRatio: 2,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }

  onValueChange(event: any) {
    this.chartService.getSuspiciousActivitiesGroupedByOriginCountries(event).subscribe(res => {
      this.createSuspActsGroupedByOriginCountryChart(res.data);
    })
  }

  ngOnInit() {
    this.chartService.getSuspiciousActivitiesGroupedByOriginCountries('all').subscribe(res => {
      this.createSuspActsGroupedByOriginCountryChart(res.data);
    })

  }
}
