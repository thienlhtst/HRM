/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as signalR from "@microsoft/signalr"
import { RequestHomepaging, Requestpaging } from 'src/Model/other/requestpaging';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { HomeService } from 'src/Services/Home/homeService.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {
  flagdetail:number
  private _hubConnection: signalR.HubConnection;
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
  HomeDetail :any={}
  reponsedata:any={}
  spinner : boolean = false
  constructor(private router: Router,private service:HomeService,private service_employee:EmployeeService) { }

  ngOnInit() {
    this.flagdetail=0
    this.textHeader="List Work Hours Today"
    this.ChangeDataWorkhour(this.paging)
    this._hubConnection = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:5088/signar', {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets
    })
    .configureLogging(signalR.LogLevel.Information)
    .build();
    this._hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :('));

    this._hubConnection.on('BroadcastMessage', (data:any) => {
      console.log(data)
      this.service_employee.GetEmployeebyID(data.employeesid).subscribe((res)=>{
        
        if(data.flag==1){
          let newdata:any={
            employee:data.employeesid,
            name:res.firstName+' '+res.middleName+' '+res.lastName,
            hourCheckin:data.hour,
            minuteCheckin:data.minute,
            hourCheckout:0,
            minuteCheckout:0
          }
          this.reponsedata.items.push(newdata)
        }else{
          let finditem= this.reponsedata.items.findIndex(x=> x.employee ==data.employeesid && x.hourCheckin!=0 )
          if (finditem !== -1) {
            this.reponsedata[finditem].hourCheckout = data.hour;
            this.reponsedata[finditem].minuteCheckout = data.minute;
          }
        }
      })
    });


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
