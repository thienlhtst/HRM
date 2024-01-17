import { Component, OnInit } from '@angular/core';
import { WorkHourModel } from 'src/Model/Relationship/WorkHourModel';
import { WorkHourService } from 'src/Services/WorkHour/WorkHour.service';

@Component({
  selector: 'app-workhour',
  templateUrl: './workhour-list.component.html',
  styleUrls: ['./workhour-list.component.scss']
})
export class WorkhourListComponent implements OnInit{
  constructor(private service : WorkHourService){}

  datas : WorkHourModel[]

  ngOnInit(): void {
    this.GetAll()
  }

  GetAll(){
    this.service.GetWorkHour().subscribe((res)=>{
      this.datas = res
    })
  }
}
