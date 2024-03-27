/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { EWAModel } from 'src/Model/EmployeeWithAllowance/EWAModel';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { EWAServiceService } from 'src/Services/EmployeeWithAllowance/ewaservice.service';
import * as signalR from "@microsoft/signalr"
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { AllowanceServiceService } from 'src/Services/Allowance/AllowanceService.service';
import { Allowancemodel } from 'src/Model/AllowanceModel';
import { EwaAutoModel } from 'src/Model/EmployeeWithAllowance/EwaAutoModel';
@Component({
  selector: 'app-ewa-list',
  templateUrl: './ewa-list.component.html',
  styleUrls: ['./ewa-list.component.scss']
})
export class EwaListComponent implements OnInit {
  constructor(private service : EWAServiceService,private EmployeeService : EmployeeService,private AllowanceService : AllowanceServiceService){}
  private _hubConnection : signalR.HubConnection
  paging : Requestpaging ={
    keyword :'',
    pageindex : 1,
    pagesize :10
  }
  PageCount : number = 1
  datas : EWAModel[]
  ShowFormAdd : boolean = false
  ShowForm : boolean = false
  textHeader : string
  DataAllowance : any ={}
  searchText : string

  ngOnInit(): void {
    this.getPaging()
  }



  OnSearchChange(){
    this.getPaging()

  }


  getPaging(){
    this.paging.keyword = this.searchText
    this.service.getEWApaging(this.paging).subscribe((res)=>{
      this.datas = res.items
      this.PageCount = res.pageCount
    })
  }

  ClicktoShowFormAdd(): void{
    this.ShowFormAdd = !this.ShowFormAdd
    this.ShowForm =!this.ShowForm
  }
  OnSuccess(){
    this.ShowFormAdd = false
  }

  pagechange(page : number) : void{
    this.paging.pageindex = page
    this.getPaging()
  }
}
