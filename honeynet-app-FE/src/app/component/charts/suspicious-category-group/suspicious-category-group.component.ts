import {Component, OnInit} from '@angular/core';
import {Chart} from "chart.js";
import {ChartService} from "../../../service/chart.service";
import {SuspiciousActivityGroupByCategoryDTO} from "../../../interface/SuspiciousActivityGroupByCategoryDTO";

@Component({
  selector: 'app-suspicious-category-group',
  templateUrl: './suspicious-category-group.component.html'
})
export class SuspiciousCategoryGroupComponent implements OnInit{
  protected suspiciousCategoryGroupChart : any;
  constructor(private chartService:ChartService) {}

  createSuspiciousCategoryGroupChart(incomingData: SuspiciousActivityGroupByCategoryDTO[]){
    this.suspiciousCategoryGroupChart = new Chart('suspiciousCategoryGroupChart', {
      type: 'bar',
      data: {
        labels: incomingData.map(activity => activity.category),
        datasets: [{
          label: 'Suspicious Activity',
          data: incomingData.map(activity => activity.count),
          backgroundColor: [
            '#fbbf24',
            '#a3e635',
            '#4ade80',
            '#818cf8',
            '#f43f5e',
            '#c084fc'
          ]
        }]
      },
      options: {
        indexAxis:'y',
        responsive: true,
        maintainAspectRatio: true,
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
              color:'#ffffff'
            },
            grid:{
              color:'#525252'
            }
          }
        },
        plugins:{
          title:{
            display:true,
            text:'Suspicious Activites Grouped By Category',
            font:{
              size:16
            },
            color:'#ffffff',
            padding:{
              top:10,
              bottom:10
            }
          },
          legend:{
            labels:{
              color:'#ffffff',
            }
          }
        }
      }
    });
  }

  ngOnInit() {
    this.chartService.getGroupedSuspiciousCategoryChartData().subscribe(res=>{
      this.createSuspiciousCategoryGroupChart(res.data);
    })

  }
}
