import { Component } from '@angular/core';
import {ChartService} from "../../../service/chart.service";
import {SuspiciousActivityGroupByCategoryDTO} from "../../../interface/chartDTO/SuspiciousActivityGroupByCategoryDTO";
import {Chart} from "chart.js";
import ServerInfoGroupByStatusDTO from "../../../interface/chartDTO/ServerInfoGroupByStatusDTO";

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
})
export class ServerStatusComponent {
  protected serversGroupedByStatusChart: any;
  protected noDataFound: boolean = false;

  constructor(private chartService: ChartService) {
  }

  createServerStatusGroupChart(incomingData: ServerInfoGroupByStatusDTO[]) {
    this.serversGroupedByStatusChart?.destroy();
    !incomingData.length ? this.noDataFound = true : this.noDataFound = false;
    this.serversGroupedByStatusChart = new Chart('serversGroupedByStatusChart', {
      type: 'doughnut',
      data: {
        labels: incomingData.map(server => server.status),
        datasets: [{
          label: 'Servers Status',
          data: incomingData.map(activity => activity.count),
          backgroundColor: [
            'rgba(34, 197, 94,0.5)',
            'rgba(244, 63, 94,0.5)',
          ],
          borderColor: [
            '#22c55e',
            '#f43f5e',
          ],
          borderWidth: 2,
          borderAlign: 'center',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2,
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
    this.chartService.getServerInfoGroupByStatus().subscribe(res => {
      this.createServerStatusGroupChart(res.data);
    })
  }

  ngOnInit() {
    this.chartService.getServerInfoGroupByStatus().subscribe(res => {
      this.createServerStatusGroupChart(res.data);
    })

  }
}
