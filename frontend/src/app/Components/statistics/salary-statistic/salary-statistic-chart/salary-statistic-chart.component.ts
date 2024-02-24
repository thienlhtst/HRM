import { Component, OnInit } from '@angular/core';
import { Options } from '../../workhour-statistic/workhour-chart-statistic/Options';
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
import { NgbNav, NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { SalaryStatisticServiceService } from 'src/Services/Statistics/SalaryStatisticService.service';
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
  selector: 'app-salary-statistic-chart',
  templateUrl: './salary-statistic-chart.component.html',
  styleUrls: ['./salary-statistic-chart.component.css']
})
export class SalaryStatisticChartComponent implements OnInit {
  op = new Options()
  
  monthChart;
  TotalSalary:number
  datafromapi:any
  datamonthChart;
nav: NgbNav;
  constructor(private services:SalaryStatisticServiceService) { }

  ngOnInit() {
    this.datamonthChart = this.op.getmonth();
    this.services.GetChartMonthlyinYear(2023).subscribe((res)=>{
      this.datafromapi= [
        {
          name: 'Salary /Tr',
          data: res.monthlyinyear
        },
        
      ];
      this.TotalSalary=res.total
      this.datamonthChart.series= this.datafromapi
    })
    
  }
  onNavChange(changeEvent: NgbNavChangeEvent) {}
}
