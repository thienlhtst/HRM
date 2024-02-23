/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeModel } from 'src/Model/Employee/EmployeeModel';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { PagingnavComponent } from 'src/app/theme/shared/components/pagingnav/pagingnav.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  constructor(private service : EmployeeService,private router : Router){}
  @ViewChild(PagingnavComponent) child : PagingnavComponent
  datas : EmployeeModel[]
  searchText : any
  paging : Requestpaging = {
    keyword : '',
    pageindex : 1,
    pagesize : 10
  }
  spinner : boolean = false
  PageCount : number = 1
  ngOnInit(): void {
    this.GetPaging()
  }


  ButtonCickToAdd(){
    this.router.navigate(['/employee/add'])
  }

  ButtonClickToUpdate(id : string){
    this.router.navigate(['/employee/update',id ])
  }

  GetAll(){
    this.service.GetEmployee().subscribe((res)=>{
      this.datas =res;
    })
  }

  GetPaging(){
    this.service.GetEmployeePaging(this.paging).subscribe((res)=>{
      setTimeout(() => {
        this.datas = res.items
        this.PageCount = res.pageCount
      }, 2000);
      setTimeout(() => {
        this.spinner = true
      }, 2000);
    })
  }

  PageChange(pagenumber : number) : void{
    this.paging.pageindex = pagenumber
    this.GetPaging()
  }
}
