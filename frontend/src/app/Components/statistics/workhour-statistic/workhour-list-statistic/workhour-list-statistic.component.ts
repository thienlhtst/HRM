/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
// bootstrap import
import {  } from '@ng-bootstrap/ng-bootstrap';


import { WorkhourStatisticsServiceService } from 'src/Services/Statistics/WorkhourStatisticsService.service';

@Component({
  selector: 'app-workhour-list-statistic',
  templateUrl: './workhour-list-statistic.component.html',
  styleUrls: ['./workhour-list-statistic.component.css']
})
export class WorkhourListStatisticComponent implements OnInit {
  yearOptions: number[];
  currentYear: number;
  currentMonth;
  monthSelected;
  yearSelected;
  generateYearOptions(startYear: number, endYear: number): number[] {
    const years = [];
    for (let year = startYear; year >= endYear; year--) {
      years.push(year);
    }
    return years;
  }
  today: Date = new Date();
  dayinmonth:number
   daysInMonth = (year, month) => new Date(year, month, 0).getDate();
  items:any[]=[]
  constructor(private services : WorkhourStatisticsServiceService) {

  }
  ngOnInit():void{
    this.currentYear = new Date().getFullYear();
    this.currentMonth= new Date().getMonth()+1;
    this.yearOptions = this.generateYearOptions(this.currentYear, this.currentYear - 20);
    this.dayinmonth = this.daysInMonth(this.currentYear,this.currentMonth+1)
    this.ChangeData(null,this.dayinmonth,this.currentMonth,this.currentYear)
  }
  ChangeData(keyword,day,month,year):void{
    this.services.GetpagingWorkhour(keyword,day,month+1,year).subscribe(res=>{
     this.items=res.items
    })
  }

  onChangeMonth(event:any){
    this.currentMonth = parseInt(event.target.value);
    this.dayinmonth = this.daysInMonth(this.currentYear,this.currentMonth+1)
    this.ChangeData(null,this.dayinmonth,this.currentMonth,this.currentYear)
  }
  onChangeYear(event:any){
    this.currentYear = parseInt(event.target.value);
    this.dayinmonth = this.daysInMonth(this.currentYear,this.currentMonth+1)
    this.ChangeData(null,this.dayinmonth,this.currentMonth,this.currentYear)
    }

}
