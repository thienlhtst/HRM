/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { HomeService } from 'src/Services/Home/homeService.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {
  pagecount:number=1;
  paging : Requestpaging = {
    keyword : '',
    pageindex : 1,
    pagesize : 10
  }
  reponsedata:any
  spinner : boolean = false
  constructor(private router: Router,private service:HomeService) { }

  ngOnInit() {
    this.ChangeData(this.paging)
  }
  ChangeData(request:Requestpaging):void{
    this.service.GetHomePaging(request).subscribe((res)=>{
      this.spinner=false
      this.reponsedata={
        items: res.items,
        pageIndex: res.pageIndex,
        pageSize: res.pageSize,
        totalRecords: res.totalRecords,
        employeeWork: res.employeeWork,
        employeeOff: res.employeeOff,
        employyLate: res.employyLate,
        totalworkhour: res.totalworkhour,
        pageCount: res.pageCount
      }
      this.pagecount=res.pageCount
      this.spinner=true
    })
  }


  numberchange(numberchange:number):void{
    this.paging.pageindex=numberchange
    this.ChangeData(this.paging)
  }

}
