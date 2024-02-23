import { Component, OnInit, ViewChild } from '@angular/core';
// bootstrap import
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';

// third party
import ApexCharts from 'apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexXAxis,
  ApexYAxis,
  ApexStroke,
  ApexGrid,
  ApexLegend
} from 'ng-apexcharts';
import { WorkhourStatisticsServiceService } from 'src/Services/Statistics/WorkhourStatisticsService.service';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  colors: string[];
  stroke: ApexStroke;
  grid: ApexGrid;
  yaxis: ApexYAxis;
  legend: ApexLegend;
};
@Component({
  selector: 'app-workhour-list-statistic',
  templateUrl: './workhour-list-statistic.component.html',
  styleUrls: ['./workhour-list-statistic.component.css']
})
export class WorkhourListStatisticComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  chartOptions_4: Partial<ChartOptions>;
  chartOptions_5: Partial<ChartOptions>;
  chartOptions_6: Partial<ChartOptions>;
  today: Date = new Date();
  dayinmonth:number
   daysInMonth = (year, month) => new Date(year, month, 0).getDate();
  items:any[]=[]
  constructor(private services : WorkhourStatisticsServiceService) { 
    
  }
  ngOnInit():void{
    this.dayinmonth = this.daysInMonth(this.today.getFullYear(),this.today.getMonth()+1)
    this.services.GetpagingWorkhour(null,30,4,2023).subscribe(res=>{
      console.log(res.items)
     this.items=res.items
    })
  }

}
