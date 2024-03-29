import {Component, OnInit} from '@angular/core';
import {ChartService} from "../../../service/chart.service";
import {Chart} from "chart.js";
import ServerInfoGroupByStatusDTO from "../../../interface/chart/ServerInfoGroupByStatusDTO";

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
})
export class ServerStatusComponent implements OnInit{
  protected serversGroupedByStatusChart: any;
  protected noDataFound: boolean = false;

  constructor(private chartService: ChartService) {}

  provideDataset(incomingData: ServerInfoGroupByStatusDTO[]) {
    if(incomingData.every(server => server.status === "RUN")){
      return [incomingData[0].count,0]
    } else if(incomingData.every(server => server.status === "SHUTDOWN")){
      return [0,incomingData[0].count]
    } else {
      if(incomingData[0].status === "RUN"){
        return [incomingData[0].count,incomingData[1].count]
      } else {
        return [incomingData[1].count,incomingData[0].count]
      }
    }
  }

  createServerStatusGroupChart(incomingData: ServerInfoGroupByStatusDTO[]) {
    this.serversGroupedByStatusChart?.destroy();
    !incomingData.length ? this.noDataFound = true : this.noDataFound = false;
    this.serversGroupedByStatusChart = new Chart('serversGroupedByStatusChart', {
      type: 'doughnut',
      data: {
        labels: ["RUN","SHUTDOWN"],
        datasets: [{
          label: 'Servers Status',
          data: this.provideDataset(incomingData),
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

  ngOnInit() {
    this.chartService.getServerInfoGroupByStatus().subscribe(res => {
      this.createServerStatusGroupChart(res.data);
    })

  }
}
