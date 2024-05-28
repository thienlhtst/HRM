/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
// bootstrap import
//import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { RequestpagingStatistic } from 'src/Model/other/requestpaingstatistic';


import { WorkhourStatisticsServiceService } from 'src/Services/Statistics/WorkhourStatisticsService.service';

@Component({
  selector: 'app-workhour-list-statistic',
  templateUrl: './workhour-list-statistic.component.html',
  styleUrls: ['../../../../../scss/shared/sreach.scss']
})
export class WorkhourListStatisticComponent implements OnInit {
  yearOptions: number[];
  PageCount : number = 1
  searchText:any
  spinner : boolean = false
  paging :RequestpagingStatistic = {
    keyword: '',
    pageindex: 1,
    pagesize: 8,
    month: 0,
    year: 0
  }
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
    this.paging.year = new Date().getFullYear();
    this.paging.month= new Date().getMonth();
    if(this.paging.month==0){
      this.paging.year=this.paging.year-1
      this.paging.month=12
    }
    this.yearOptions = this.generateYearOptions(this.paging.year, this.paging.year - 20);
    this.dayinmonth = this.daysInMonth(this.paging.year,this.paging.month)
    this.ChangeData(this.dayinmonth,this.paging)
  }

  ChangeData(day,requestpaing:RequestpagingStatistic ):void{
    this.services.GetpagingWorkhour(day,requestpaing).subscribe(res=>{
      this.spinner=false
     this.items=res.items
     this.spinner=true
    })
  }

  onChangeMonth(event:any){
    this.paging.month = parseInt(event.target.value);
    this.dayinmonth = this.daysInMonth(this.paging.year,this.paging.month)
    this.ChangeData(this.dayinmonth,this.paging)
  }
  onChangeYear(event:any){
    this.paging.year = parseInt(event.target.value);
    this.dayinmonth = this.daysInMonth(this.paging.year,this.paging.month)
    this.ChangeData(this.dayinmonth,this.paging)
    }
    PageChange(pagenumber : number) : void{
      this.paging.pageindex = pagenumber
      this.ChangeData(this.dayinmonth,this.paging)
    }

}
