import {Component, OnInit} from '@angular/core';
import {Chart} from "chart.js";
import {ChartService} from "../../../service/chart.service";
import {SuspiciousActivityGroupByCategoryDTO} from "../../../interface/SuspiciousActivityGroupByCategoryDTO";

@Component({
  selector: 'app-suspicious-category-group',
  templateUrl: './suspicious-category-group.component.html'
})
export class SuspiciousCategoryGroupComponent implements OnInit {
  protected suspiciousActivitiesGroupedByCategoryChart: any;
  protected noDataFound: boolean = false;

  constructor(private chartService: ChartService) {
  }

  createSuspiciousCategoryGroupChart(incomingData: SuspiciousActivityGroupByCategoryDTO[]) {
    this.suspiciousActivitiesGroupedByCategoryChart?.destroy();
    !incomingData.length ? this.noDataFound = true : this.noDataFound = false;
    this.suspiciousActivitiesGroupedByCategoryChart = new Chart('suspiciousActivitiesGroupedByCategoryChart', {
      type: 'bar',
      data: {
        labels: incomingData.map(activity => activity.category),
        datasets: [{
          label: 'Honeypot Categories',
          data: incomingData.map(activity => activity.count),
          backgroundColor: [
            'rgba(251, 191, 36,0.5)',
            'rgba(163, 230, 53,0.5)',
            'rgba(74, 222, 128,0.5)',
            'rgba(129, 140, 248,0.5)',
            'rgba(244, 63, 94,0.5)',
            'rgba(192, 132, 252,0.5)'
          ],
          borderColor: [
            '#eab308',
            '#a3e635',
            '#4ade80',
            '#818cf8',
            '#f43f5e',
            '#c084fc'
          ],
          borderWidth: 2,
          borderRadius: 1,
          barThickness: 25,
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: true,
        devicePixelRatio:4,
        scales: {
          x: {
            ticks: {
              color: '#ffffff'
            },
            grid: {
              color: '#525252'
            }
          },
          y: {
            ticks: {
              color: '#ffffff',
            },
            grid: {
              color: '#525252'
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: '#ffffff',
            }
          }
        }
      }
    });
  }

  onValueChange(event: any) {
    this.chartService.getSuspiciousActivitiesGroupedByCategoryChartData(event).subscribe(res => {
      this.createSuspiciousCategoryGroupChart(res.data);
    })
  }

  ngOnInit() {
    this.chartService.getSuspiciousActivitiesGroupedByCategoryChartData('all').subscribe(res => {
      this.createSuspiciousCategoryGroupChart(res.data);
    })

  }
}
