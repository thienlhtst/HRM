import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { RequestpagingStatistic } from 'src/Model/other/requestpaingstatistic';
import { SalaryStatisticServiceService } from 'src/Services/Statistics/SalaryStatisticService.service';

@Component({
  selector: 'app-salary-statistic-list',
  templateUrl: './salary-statistic-list.component.html',
  styleUrls: ['./salary-statistic-list.component.css']
})
export class SalaryStatisticListComponent implements OnInit {
  salaryemployee;
  top5salary;
  yearOptions: number[];
  currentYear: number;
  currentMonth;
  PageCount : number = 1
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
    this.currentYear = new Date().getFullYear();
    this.currentMonth= new Date().getMonth();
    if(this.currentMonth==0){
      this.currentYear=this.currentYear-1
      this.currentMonth=12
    }
    this.yearOptions = this.generateYearOptions(this.currentYear, this.currentYear - 20);
    this.paging.month= this.currentMonth
    this.paging.year=this.currentYear
  forkJoin([
    this.services.GetTopSalary(5),
    this.services.Getpagingsalary(this.paging)
  ]).subscribe(([data1,data2])=>{
    this.top5salary=data1
    this.salaryemployee = data2.items
  })
  }
  ChangeData(request:RequestpagingStatistic ):void{
    this.services.Getpagingsalary(request).subscribe((res)=>{
      this.salaryemployee = res.items
    })
  }  
  onChangeMonth(event:any){
    this.currentMonth = parseInt(event.target.value);
    this.paging.month=this.currentMonth
    this.ChangeData(this.paging)
  }
  onChangeYear(event:any){
    this.currentYear = parseInt(event.target.value);
    this.paging.year= this.currentYear
    this.ChangeData(this.paging)
    }
    PageChange(pagenumber : number) : void{
      this.paging.pageindex = pagenumber
      this.ChangeData(this.paging)
    }
}
