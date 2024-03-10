import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkHourModel } from 'src/Model/Relationship/WorkHourModel';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { WorkHourService } from 'src/Services/WorkHour/WorkHour.service';

@Component({
  selector: 'app-workhour',
  templateUrl: './workhour-list.component.html',
  styleUrls: ['./workhour-list.component.scss','../../../../scss/shared/sreach.scss']
})
export class WorkhourListComponent implements OnInit{

  searchText:any

  constructor(private service : WorkHourService,private router: Router){


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
  nagivativeAdd(){
    this.router.navigate(['/workhour/addoredit'])
  }
}
