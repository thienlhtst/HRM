/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { RequestpagingStatistic } from 'src/Model/other/requestpaingstatistic';
import { SalaryStatisticServiceService } from 'src/Services/Statistics/SalaryStatisticService.service';

@Component({
  selector: 'app-salary-statistic-list',
  templateUrl: './salary-statistic-list.component.html',
  styleUrls: ['../../../../../../../scss/shared/sreach.scss']
})
export class SalaryStatisticListComponent implements OnInit {
  salaryemployee:any[]=[];
  top5salary:any[]=[];
  yearOptions: number[]=[];
  spinner : boolean = false
  PageCount : number = 1
  searchText:any
  paging :RequestpagingStatistic = {
    keyword: '',
    pageindex: 1,
    pagesize: 8,
    month: 0,
    year: 0
  }
  
  constructor(private services:SalaryStatisticServiceService) { }
  generateYearOptions(startYear: number, endYear: number): number[] {
    const years = [];
    for (let year = startYear; year >= endYear; year--) {
      years.push(year);
    }
    return years;
  }
  ngOnInit() {
    this.paging.year = new Date().getFullYear();
    this.paging.month= new Date().getMonth()+1;
    if(this.paging.month==1){
      this.paging.year=this.paging.year-1
      this.paging.month=12
    }
    this.yearOptions = this.generateYearOptions(this.paging.year, this.paging.year - 20);
    this.paging.month= this.paging.month-1
  forkJoin([
    this.services.GetTopSalary(5),
    this.services.Getpagingsalary(this.paging)
  ]).subscribe(([data1,data2])=>{
    this.top5salary=data1
    this.salaryemployee = data2.items
    this.spinner =true

  })
  }
  ChangeData(request:RequestpagingStatistic ):void{

    this.services.Getpagingsalary(request).subscribe((res)=>{
      this.spinner =false
      this.salaryemployee = res.items
      this.spinner =true
    })
  }
  onChangeMonth(event:any){
    this.paging.month = parseInt(event.target.value);
    this.ChangeData(this.paging)
  }
  onChangeYear(event:any){
    this.paging.year = parseInt(event.target.value);
    this.ChangeData(this.paging)
    }
    PageChange(pagenumber : number) : void{
      this.paging.pageindex = pagenumber
      this.ChangeData(this.paging)
    }
}
