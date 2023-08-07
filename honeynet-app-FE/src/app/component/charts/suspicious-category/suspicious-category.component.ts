import {Component, OnInit} from '@angular/core';
import {Chart} from "chart.js";
import {ChartService} from "../../../service/chart.service";
import {SuspiciousActivityGroupByCategoryDTO} from "../../../interface/chartDTO/SuspiciousActivityGroupByCategoryDTO";

@Component({
  selector: 'app-suspicious-category',
  templateUrl: './suspicious-category.component.html'
})
export class SuspiciousCategoryComponent implements OnInit {
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
            'rgba(59, 130, 246,0.5)',
            'rgba(245, 245, 245,0.5)',
            'rgba(34, 197, 94,0.5)',
            'rgba(234, 179, 8,0.5)',
            'rgba(244, 63, 94,0.5)',
            'rgba(192, 132, 252,0.5)',
          ],
          borderColor: [
            '#3b82f6',
            '#f5f5f5',
            '#22c55e',
            '#eab308',
            '#f43f5e',
            '#c084fc',
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
        devicePixelRatio:3,
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
