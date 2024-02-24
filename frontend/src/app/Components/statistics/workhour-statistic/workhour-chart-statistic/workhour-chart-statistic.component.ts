import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbDateStruct, NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
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
  tooltip: ApexTooltip;
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
  yearOptions: number[];
  currentYear: number;
  currentMonth;
  monthSelected;
  yearSelected;
  @ViewChild('chart') chart: ChartComponent;
  chartOptions_4: Partial<ChartOptions>;
  flagdate:number=0;
  monthChart;
  weekChart;
  testthu;
  datamonthChart;

  generateYearOptions(startYear: number, endYear: number): number[] {
    const years = [];
    for (let year = startYear; year >= endYear; year--) {
      years.push(year);
    }
    return years;
  }
  getFormattedDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}`;
  }
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
        categories: ['Mo ', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        show: true
      },
      grid: {
        show: false
      },
      tooltip: {
        y: {
          formatter: (val) =>
             val + " employee"
        },
      }
    };
    let currentdate = new Date()
    
    this.services.GetEmployeeOff(currentdate.getFullYear()+'-'+(currentdate.getMonth()+1)+'-'+currentdate.getDate() ).subscribe((res)=>{
      for(let i=0;i<7;i++){
        let day= new Date(res.day[i])
        if(currentdate < day){
          res.employeeOff[i]=0
          res.employeeWork[i]=0
        }
      }
      this.chartOptions_4.series=[
        {
          name:"Work",
          data: res.employeeWork
        },
        {
          color:"#00FFFF",
          name:"Off",
          data: res.employeeOff
        }
      ]
    
      this.chartOptions_4.xaxis={
        categories: ['Mo '+this.getFormattedDate(new Date(res.day[0])),
                  'Tu '+this.getFormattedDate(new Date(res.day[1])),
                  'We '+this.getFormattedDate(new Date(res.day[2])),
                  'Th '+this.getFormattedDate(new Date(res.day[3])),
                  'Fr '+this.getFormattedDate(new Date(res.day[4])),
                  'Sa '+this.getFormattedDate(new Date(res.day[5])),
                  'Su '+this.getFormattedDate(new Date(res.day[6]))],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      }
        
      
    })

  }
   ngOnInit() {
    this.currentYear = new Date().getFullYear();
    this.currentMonth= new Date().getMonth();
    this.yearOptions = this.generateYearOptions(this.currentYear, this.currentYear - 20);
    this.testthu = this.op.getweek()
    this.datamonthChart = this.op.getmonth();
     this.services.GetWeekWorkhour(this.currentMonth, this.currentYear).subscribe((res)=>{
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
      this.flagdate=0;
      this.services.GetWeekWorkhour(this.currentMonth, this.currentYear).subscribe((res)=>{
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
    this.flagdate=1;
    this.services.GetMonthWorkhour(this.currentYear).subscribe((res)=>{
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
  onChangeMonth(event:any){
    this.currentMonth = parseInt(event.target.value);
    this.services.GetWeekWorkhour(this.currentMonth, this.currentYear).subscribe((res)=>{
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
  onChangeYear(event:any){
    this.currentYear = parseInt(event.target.value);
    if(this.flagdate==0){
      this.services.GetWeekWorkhour(this.currentMonth, this.currentYear).subscribe((res)=>{
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
    }else{
      this.services.GetMonthWorkhour(this.currentYear).subscribe((res)=>{
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
  OnChangeDate(date : NgbDateStruct){
     let currentdate= date.year+'-'+date.month+'-'+date.day 
      this.services.GetEmployeeOff(currentdate).subscribe((res)=>{
        
        this.chartOptions_4.series=[
          {
            name:"Work",
            data: res.employeeWork
          },
          {
            color:"#00FFFF",
            name:"Off",
            data: res.employeeOff
          }
        ]
        this.chartOptions_4.xaxis={
          categories: ['Mo '+this.getFormattedDate(new Date(res.day[0])),
                    'Tu '+this.getFormattedDate(new Date(res.day[1])),
                    'We '+this.getFormattedDate(new Date(res.day[2])),
                    'Th '+this.getFormattedDate(new Date(res.day[3])),
                    'Fr '+this.getFormattedDate(new Date(res.day[4])),
                    'Sa '+this.getFormattedDate(new Date(res.day[5])),
                    'Su '+this.getFormattedDate(new Date(res.day[6]))],
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        }

      })
  }
}
