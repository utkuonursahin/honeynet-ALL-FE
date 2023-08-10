import {Component, OnInit} from '@angular/core';
import {ChartService} from "../../../service/chart.service";
import {Chart} from "chart.js";
import {SuspiciousActivityGroupByOriginSourceDTO} from "../../../interface/chart/SuspiciousActivityGroupByOriginSourceDTO";

@Component({
  selector: 'app-suspicious-origin-source',
  templateUrl: './suspicious-origin-source.component.html'
})
export class SuspiciousOriginSourceComponent implements OnInit{
  protected suspiciousActivitiesGroupedByOriginChart : any;
  protected noDataFound:boolean = false;
  constructor(private chartService:ChartService) {}

  createSuspiciousOriginGroupChart(incomingData: SuspiciousActivityGroupByOriginSourceDTO[]){
    this.suspiciousActivitiesGroupedByOriginChart?.destroy();
    !incomingData.length ? this.noDataFound = true : this.noDataFound = false;
    this.suspiciousActivitiesGroupedByOriginChart = new Chart('suspiciousActivitiesGroupedByOriginChart', {
      type: 'bar',
      data: {
        labels: incomingData.map(activity => activity.source).slice(0,5),
        datasets: [{
          label: 'Request Sources',
          data: incomingData.map(activity => activity.count).slice(0,5),
          backgroundColor: [
            'rgba(59, 130, 246,0.5)',
            'rgba(245, 245, 245,0.5)',
            'rgba(34, 197, 94,0.5)',
            'rgba(234, 179, 8,0.5)',
            'rgba(244, 63, 94,0.5)',
          ],
          borderColor: [
            '#3b82f6',
            '#f5f5f5',
            '#22c55e',
            '#eab308',
            '#f43f5e',
          ],
          borderWidth: 2,
          borderRadius: 1,
          maxBarThickness: 25,
        }]
      },
      options: {
        indexAxis:'y',
        responsive: true,
        maintainAspectRatio: true,
        devicePixelRatio:2,
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
    this.chartService.getSuspiciousActivitiesGroupedByOriginSources(event).subscribe(res=>{
      this.createSuspiciousOriginGroupChart(res.data);
    })
  }

  ngOnInit() {
    this.chartService.getSuspiciousActivitiesGroupedByOriginSources('all').subscribe(res=>{
      this.createSuspiciousOriginGroupChart(res.data);
    })
  }
}
