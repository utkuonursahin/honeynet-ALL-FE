import {Component, OnInit} from '@angular/core';
import {ChartService} from "../../../service/chart.service";
import {Chart} from "chart.js";
import {
  SuspiciousActivityGroupByOriginCountryDTO
} from "../../../interface/chartDTO/SuspiciousActivityGroupByOriginCountryDTO";

@Component({
  selector: 'app-suspicious-origin-country',
  templateUrl: './suspicious-origin-country.component.html',
})
export class SuspiciousOriginCountryComponent implements OnInit{
  protected suspActsGroupedByOriginCountryChart : any;
  protected noDataFound:boolean = false;
  constructor(private chartService:ChartService) {}

  createSuspActsGroupedByOriginCountryChart(incomingData: SuspiciousActivityGroupByOriginCountryDTO[]){
    this.suspActsGroupedByOriginCountryChart?.destroy();
    !incomingData.length ? this.noDataFound = true : this.noDataFound = false;
    this.suspActsGroupedByOriginCountryChart = new Chart('suspActsGroupedByOriginCountryChart', {
      type: 'bar',
      data: {
        labels: incomingData.map(activity => activity.country).slice(0,5),
        datasets: [{
          label: 'Request Countries',
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
    this.chartService.getSuspiciousActivitiesGroupedByOriginCountries(event).subscribe(res=>{
      this.createSuspActsGroupedByOriginCountryChart(res.data);
    })
  }

  ngOnInit() {
    this.chartService.getSuspiciousActivitiesGroupedByOriginCountries('all').subscribe(res=>{
      this.createSuspActsGroupedByOriginCountryChart(res.data);
    })

  }
}
