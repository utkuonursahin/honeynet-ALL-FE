import {AfterViewInit, Component} from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import {ChartService} from "../../../service/chart.service";
import {
  SuspiciousActivityGroupByOriginCountryDTO
} from "../../../interface/chart/SuspiciousActivityGroupByOriginCountryDTO";

@Component({
  selector: 'app-world-chart',
  templateUrl: './world-chart.component.html'
})
export class WorldChartComponent implements AfterViewInit {
  protected suspiciousRequestData: SuspiciousActivityGroupByOriginCountryDTO[] = [];

  private root: any;
  private chart: any;
  private polygonSeries: any;
  private bubbleSeries: any;
  private bubbleColors: any;

  constructor(private chartService: ChartService) {}

  createWorldChart(data: SuspiciousActivityGroupByOriginCountryDTO[]){
    this.suspiciousRequestData = data;
    this.root = am5.Root.new('world-chart');
    this.root.setThemes([
      am5themes_Animated.new(this.root)
    ]);
    this.chart = this.root.container.children.push(am5map.MapChart.new(this.root, {
      projection: am5map.geoNaturalEarth1(),
      minZoomLevel: 2,
      maxZoomLevel: 3,
      zoomLevel: 2,
      panX: "rotateX",
      maxPanOut: 0.2,
      homeGeoPoint: {longitude: 29, latitude: 41}
    }));
    this.polygonSeries = this.chart.series.push(
      am5map.MapPolygonSeries.new(this.root, {
        geoJSON: am5geodata_worldLow,
        fill: am5.color("#171717"),
        exclude: ["AQ"]
      })
    );
    this.polygonSeries.events.on("datavalidated", () => {
      this.chart.goHome();
    });
    const circleTemplate: any = am5.Template.new({
      //@ts-ignore
      tooltipText: "{name} : {value}"
    });

    this.bubbleSeries = this.chart.series.push(
      am5map.MapPointSeries.new(this.root, {
        calculateAggregates: true,
        valueField: "value",
        polygonIdField: "id"
      })
    );
    this.bubbleSeries.bullets.push(() => {
      return am5.Bullet.new(this.root, {
        sprite: am5.Circle.new(this.root, {
          radius: 10,
          templateField: "circleTemplate"
        }, circleTemplate)
      });
    });

    this.bubbleSeries.set("heatRules", [{
      target: circleTemplate,
      min: 5,
      max: 10,
      key: "radius",
      dataField: "value"
    }]);

    this.bubbleColors = am5.ColorSet.new(this.root, {});
    this.bubbleSeries.data.setAll(this.suspiciousRequestData
    .filter(activity => activity.country !== null)
    .map((item, index) => {
      return {
        id: item.country,
        name: item.country,
        value: item.count,
        circleTemplate: {fill: this.bubbleColors.getIndex(index)}
      }
    }))
  }

  ngAfterViewInit() {
    this.chartService.getSuspiciousActivitiesGroupedByOriginCountries('6m')
    .subscribe(res => {
      this.createWorldChart(res.data)
    })
  }

  onValueChange(event: any) {
    this.chartService.getSuspiciousActivitiesGroupedByOriginCountries(event).subscribe(res => {
      this.suspiciousRequestData = res.data;
      this.bubbleSeries.data.setAll(this.suspiciousRequestData
      .filter(activity => activity.country !== null)
      .map((item, index) => {
        return {
          id: item.country,
          name: item.country,
          value: item.count,
          circleTemplate: {fill: this.bubbleColors.getIndex(index)}
        }
      }))
    })
  }
}
