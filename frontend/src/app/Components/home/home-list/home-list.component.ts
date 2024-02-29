/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestHomepaging, Requestpaging } from 'src/Model/other/requestpaging';
import { HomeService } from 'src/Services/Home/homeService.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {
  flagdetail:number
  textHeader:string
  pagecount:number=1;
  paging : Requestpaging = {
    keyword : '',
    pageindex : 1,
    pagesize : 10
  }
  paginghome : RequestHomepaging = {
    keyword : '',
    flag:1,
    pageindex : 1,
    pagesize : 10
  }
  HomeDetail :any
  reponsedata:any
  spinner : boolean = false
  constructor(private router: Router,private service:HomeService) { }

  ngOnInit() {
    this.flagdetail=0
    this.textHeader="List Work Hours Today"
    this.ChangeDataWorkhour(this.paging)
  }
  ChangeDataWorkhour(request:Requestpaging):void{
    this.service.GetHomePaging(request).subscribe((res)=>{
      this.spinner=false
      this.HomeDetail={
        employeeWork: res.employeeWork,
        employeeOff: res.employeeOff,
        employyLate: res.employyLate,
        totalworkhour: res.totalworkhour,
      }
      this.reponsedata={
        items: res.items,
        pageIndex: res.pageIndex,
        pageSize: res.pageSize,
        totalRecords: res.totalRecords,
       
        pageCount: res.pageCount
      }
      this.pagecount=res.pageCount
      this.spinner=true
    })
  }
  ChangeDataEmployee(request: RequestHomepaging):void{
    this.service.getHomeEmployeePaing(request).subscribe((res)=>{
      this.spinner=false
      this.reponsedata={
        items: res.items,
        pageIndex: res.pageIndex,
        pageSize: res.pageSize,
        totalRecords: res.totalRecords,
        pageCount: res.pageCount
      }
      this.pagecount=res.pageCount
      this.spinner=true
    })
  }

  numberchange(numberchange:number):void{
    this.paging.pageindex=numberchange
    if(this.flagdetail==0)
    this.ChangeDataWorkhour(this.paging)
    else{
      this.ChangeDataEmployee(this.paginghome)
    }
  
  }
  changeFlag(flag:number):void{
    this.flagdetail=flag
    this.paginghome.flag=flag
    
    if(flag==0){
      this.textHeader="List Work Hours Today"

      this.ChangeDataWorkhour(this.paging)
    }else {
      
      this.textHeader=flag===1? "List Employee Off Today":
                      flag===2? "List Employee Late Today":
                      flag===3? "List Employee Work Today":
                      "";
      this.ChangeDataEmployee(this.paginghome)
    }

    
  }
}
