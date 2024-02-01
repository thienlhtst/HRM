import { Component, OnInit, ViewChild } from '@angular/core';
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
import { Options } from './Options';
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
  selector: 'app-workhour-chart-statistic',
  templateUrl: './workhour-chart-statistic.component.html',
  styleUrls: ['./workhour-chart-statistic.component.css']
})
export class WorkhourChartStatisticComponent implements OnInit {
  op = new Options()
  @ViewChild('chart') chart: ChartComponent;
  chartOptions_4: Partial<ChartOptions>;
  monthChart;
  weekChart;
  testdata:any = [
    {
    name:"employee work",
    data: [80, 95, 70, 42, 65, 55, 78]
  },
  {
    color:"#00FFFF",
    name:"employee Off",
    data: [80, 95, 70, 42, 65, 55, 78]
  }]
  constructor() { 
    this.chartOptions_4 = 
    {
      chart: {
        type: 'bar',
        height: 365,
        toolbar: {
          show: false
        }
      },
      colors: ['#13c2c2'],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 4
        }
      },
      dataLabels: {
        enabled: false
      },
      series:this.testdata,
      stroke: {
        curve: 'smooth',
        width: 2
      },
      xaxis: {
        categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        show: false
      },
      grid: {
        show: false
      }
    };
    
  }






  ngOnInit() {
    this.op.getweek()
    
    setTimeout(() => {
      this.weekChart = new ApexCharts(document.querySelector('#visitor-chart'), this.op.getweek());
      this.weekChart.render();
    }, 500);
  }
  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 1) {
      setTimeout(() => {
        this.weekChart = new ApexCharts(document.querySelector('#visitor-chart'), this.op.getweek());
        this.weekChart.render();
      }, 200);
    }

    if (changeEvent.nextId === 2) {
      setTimeout(() => {
        this.monthChart = new ApexCharts(document.querySelector('#visitor-chart-1'), this.op.getmonth());
        this.monthChart.render();
      }, 200);
    }
  }
}
