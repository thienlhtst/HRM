import { Component, OnInit } from '@angular/core';
import { WorkHourModel } from 'src/Model/Relationship/WorkHourModel';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { WorkHourService } from 'src/Services/WorkHour/WorkHour.service';

@Component({
  selector: 'app-workhour',
  templateUrl: './workhour-list.component.html',
  styleUrls: ['./workhour-list.component.scss']
})
export class WorkhourListComponent implements OnInit{


  constructor(private service : WorkHourService){


  }
  requestpaing:Requestpaging={
    keyword: '',
    pageindex:1,
    pagesize:10,
  }
  datas : WorkHourModel[]
  pageCount:number=1
  listitems:any[] =[]
  ngOnInit(): void {
     this.GetAllpaging()
  }


  GetAllpaging(){
    this.service.GetWorkHourPaging(this.requestpaing).subscribe((res)=>{

      this.listitems=res.items

      this.pageCount = res.pageCount
    })

  }
  numberchange(numberchange:number):void{
    this.requestpaing.pageindex = numberchange
    this.GetAllpaging()
  }
}
