import { Injectable } from "@angular/core";
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

import ApexCharts from 'apexcharts';
 

const  weekOptions={
    chart: {
        height: 450,
        type: 'area',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#1890ff', '#13c2c2'],
      series: [
        {
          name: 'Lask week',
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: 'This week',
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      stroke: {
        curve: 'smooth',
        width: 2
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }

}
const monthOptions = {
    chart: {
      height: 450,
      type: 'area',
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#1890ff', '#13c2c2'],
    series: [
      {
        name: 'workhour',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35]
      },
      
    ],
    stroke: {
      curve: 'smooth',
      width: 2
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  };
  
  
@Injectable()
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class Options {
  getweek() {
    return weekOptions;
  }
  getmonth(){
    return monthOptions;
  }
  getchar4(){
      const chartOptions_4 = 
    
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
      series:[],
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
  
  
  
  
    return chartOptions_4;
  }
}
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