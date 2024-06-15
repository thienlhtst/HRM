/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { WorkHourStatisticEmployee, WorkHourofEmployee } from 'src/Model/Workhours/WorkHourofEmployee';
import { TokenService } from 'src/Services/Token/token.service';
import { WorkHourService } from 'src/Services/WorkHour/WorkHour.service';

@Component({
  selector: 'app-workout-view',
  templateUrl: './workout-view.component.html',
  styleUrls: ['./workout-view.component.scss']
})
export class WorkoutViewComponent implements OnInit {
  constructor(private service : WorkHourService,private tokenService : TokenService){}
  datas : WorkHourofEmployee[]
  datasofselected : WorkHourofEmployee[]
  IdOfthisEmployee : string
  yearOptions: number[];
  date :WorkHourStatisticEmployee = {
    month: 0,
    year: 0
  }
  today: Date = new Date();
  dayinmonth:number
  listofday : number[] = []
  totalWorkHour : number = 1
  daysInMonth = (year, month) => new Date(year, month, 0).getDate();
  ngOnInit(): void {
    this.IdOfthisEmployee = this.tokenService.getTokenId()
    this.date.year = new Date().getFullYear();
    this.date.month= new Date().getMonth();
    if(this.date.month==0){
      this.date.year=this.date.year-1
      this.date.month=12
    }
    this.yearOptions =  this.generateYearOptions(this.date.year, this.date.year - 20)
    this.dayinmonth = this.daysInMonth(this.date.year,this.date.month)
    this.GetWorkHour()

  }

  GetWorkHour(){
    this.totalWorkHour = 0
    this.service.GetWorkHourByEmployeeID(this.IdOfthisEmployee).subscribe((res)=>{
      this.datas = res
      this.datas.forEach((item)=>{
        if(item.month == this.date.month && item.year == this.date.year){
          this.listofday.forEach((dayitem)=>{
            this.totalWorkHour += 1
          })

        }
      })
    })


  }




  generateYearOptions(startYear: number, endYear: number): number[] {
    const years = [];
    for (let year = startYear; year >= endYear; year--) {
      years.push(year);
    }
    return years;
  }
  onChangeMonth(event:any){
    this.listofday.splice(0,50)
    this.date.month = parseInt(event.target.value);
    this.dayinmonth = this.daysInMonth(this.date.year,this.date.month)
    for (let i = 1; i <= this.dayinmonth; i++) {
      this.listofday.push(i);
    }
    this.GetWorkHour()

  }
  onChangeYear(event:any){
    this.listofday.splice(0,50)
    this.date.year = parseInt(event.target.value);
    this.dayinmonth = this.daysInMonth(this.date.year,this.date.month)
    for (let i = 1; i <= this.dayinmonth; i++) {
      this.listofday.push(i);
    }
    this.GetWorkHour()
    }
}
