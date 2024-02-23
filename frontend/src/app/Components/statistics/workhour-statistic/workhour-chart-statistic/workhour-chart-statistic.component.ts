import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeWork } from 'src/Model/Statistics/EmployeeWork';
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
  testthu;
  datamonthChart;

  
  constructor(private services:WorkhourStatisticsServiceService) { 
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
      series:[

        {
        name:"employee work",
        data: [0,2,4,5,6,7]
      },
      {
        color:"#00FFFF",
        name:"employee Off",
        data: [0,2,4,5,6,7]
      }
    ],
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
     
    this.services.GetEmployeeOff('2023-4-5').subscribe((res)=>{
      this.chartOptions_4.series=[
        {
          name:"employee work",
          data: res.employeeWork
        },
        {
          color:"#00FFFF",
          name:"employee Off",
          data: res.employeeOff
        }
      ]
    })

  }
   ngOnInit() {
    this.testthu = this.op.getweek()
    this.datamonthChart = this.op.getmonth();
     this.services.GetWeekWorkhour(4, 2023).subscribe((res)=>{
      this.testthu.series=[
      ]
      for (let i = 0; i < res.length; i++) {
            let row = res[i];
            let data :any={
                name: 'Week '+i,
                data: row,
            } 
            this.testthu.series.push(data)
      }
      setTimeout(() => {
        this.weekChart = new ApexCharts(document.querySelector('#visitor-chart'), this.testthu);
        this.weekChart.render();
      }, 500);
    })
  }
  
  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 1) {
      this.services.GetWeekWorkhour(4, 2023).subscribe((res)=>{
      this.testthu.series=[
      ]
      for (let i = 0; i < res.length; i++) {
            let row = res[i];
            let data :any={
                name: 'Week '+i,
                data: row,
            } 
            this.testthu.series.push(data)
      }
      setTimeout(() => {
        this.weekChart = new ApexCharts(document.querySelector('#visitor-chart'), this.testthu);
        this.weekChart.render();
      }, 200);
    })
  }
  if (changeEvent.nextId === 2) {
    this.services.GetMonthWorkhour(2023).subscribe((res)=>{
      this.datamonthChart.series=[
        {
          name: 'workhour',
          data:res
        }
      ]
      setTimeout(() => {
        this.monthChart = new ApexCharts(document.querySelector('#visitor-chart-1'), this.datamonthChart);
        this.monthChart.render();
      }, 200);
    })
  }
    
  }
}
