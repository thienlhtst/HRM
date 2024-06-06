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
  op = new Options();

  monthChart;
  TotalSalary: number;
  datafromapi: any=[{
    name: 'Salary /Tr',
    data: []
  }];
  datamonthChart;
  yearOptions: number[];
  currentYear: number;
  constructor(private services: SalaryStatisticServiceService) { }
  generateYearOptions(startYear: number, endYear: number): number[] {
    const years = [];
    for (let year = startYear; year >= endYear; year--) {
      years.push(year);
    }
    return years;
  }
  ngOnInit() {
    this.currentYear = new Date().getFullYear()-1;
    this.yearOptions = this.generateYearOptions(this.currentYear+1, this.currentYear - 20);
    this.datamonthChart = this.op.getmonth();
    this.datamonthChart.series = this.datafromapi;
    this.ChangeData(this.currentYear);
  }
  ChangeData(year): void {
    this.services.GetChartMonthlyinYear(year).subscribe((res) => {
      this.datafromapi = [
        {
          name: 'Salary /Tr',
          data: res.monthlyinyear
        }
      ];
      this.TotalSalary = res.total;
      this.datamonthChart.series = this.datafromapi;
    });
  }
  onChangeYear(event: any) {
    this.currentYear = parseInt(event.target.value);
    this.ChangeData(this.currentYear);
  }
}
