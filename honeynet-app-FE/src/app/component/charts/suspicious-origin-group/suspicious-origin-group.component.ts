import { Component } from '@angular/core';
import {ChartService} from "../../../service/chart.service";
import {Chart} from "chart.js";
import {SuspiciousActivityGroupByOriginDTO} from "../../../interface/SuspiciousActivityGroupByOriginDTO";

@Component({
  selector: 'app-suspicious-origin-group',
  templateUrl: './suspicious-origin-group.component.html'
})
export class SuspiciousOriginGroupComponent {
  protected suspiciousActivitiesGroupedByOriginChart : any;
  protected noDataFound:boolean = false;
  constructor(private chartService:ChartService) {}

  createSuspiciousOriginGroupChart(incomingData: SuspiciousActivityGroupByOriginDTO[]){
    this.suspiciousActivitiesGroupedByOriginChart?.destroy();
    !incomingData.length ? this.noDataFound = true : this.noDataFound = false;
    this.suspiciousActivitiesGroupedByOriginChart = new Chart('suspiciousActivitiesGroupedByOriginChart', {
      type: 'bar',
      data: {
        labels: incomingData.map(activity => activity.origin),
        datasets: [{
          label: 'Request IPs',
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
        indexAxis:'y',
        responsive: true,
        maintainAspectRatio: true,
        devicePixelRatio:4,
        scales: {
          x: {
            ticks:{
              color:'#ffffff'
            },
            grid:{
              color:'#525252'
            }
          },
          y: {
            ticks:{
              callback: function (value) {
                const lbl = this.getLabelForValue(value as number);
                if (typeof lbl === 'string' && lbl.length > 18) {
                  return `${lbl.substring(0, 18)}...`;
                }
                return lbl;
              },
              color:'#ffffff',
            },
            grid:{
              color:'#525252'
            }
          }
        },
        plugins:{
          legend:{
            labels:{
              color:'#ffffff',
            }
          }
        }
      }
    });
  }

  onValueChange(event:any){
    this.chartService.getSuspiciousActivitiesGroupedByOrigin(event).subscribe(res=>{
      this.createSuspiciousOriginGroupChart(res.data);
    })
  }

  ngOnInit() {
    this.chartService.getSuspiciousActivitiesGroupedByOrigin('all').subscribe(res=>{
      this.createSuspiciousOriginGroupChart(res.data);
    })

  }
}
