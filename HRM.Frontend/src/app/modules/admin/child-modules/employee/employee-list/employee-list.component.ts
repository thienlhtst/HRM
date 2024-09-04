/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationDialogService } from 'src/app/modules/share/components/confirmation-dialog/confirmation-dialog.service';
import { PagingnavComponent } from 'src/app/modules/share/components/pagingnav/pagingnav.component';
import { EmployeeModel } from 'src/Model/Employee/EmployeeModel';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { EmployeeService } from 'src/Services/Employee/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  constructor(private service : EmployeeService,
              private confirm : ConfirmationDialogService,
              private router : Router){}
  @ViewChild(PagingnavComponent) child : PagingnavComponent | undefined
  datas : EmployeeModel[] | undefined
  searchText : string = ""
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
    this.router.navigate(['admin/emp/add'])
  }

  ButtonClickToUpdate(id : string){
    this.router.navigate(['/emp/update',id ])
  }

  ButtonClickToDetails(id:string){
    this.router.navigate(['emp/details',id])
  }

  GetAll(){
    this.service.GetEmployee().subscribe((res)=>{
      this.datas =res;
    })
  }

  onSearchChange(){
    this.GetPaging()
  }






  Delete(event:any,id : string){
    this.confirm.confirm('Please Confirm','You wanna delete id : ' + id)
   .then((confirmed)=>{
    if(confirmed){
      this.service.DeleteEmployee(id).subscribe((res)=>{
          this.confirm.confirm('Success','Delete Succeed')
          .then((confirmSuccess)=>{
            if(confirmSuccess) window.location.reload()
          })

        })
      }
    })
  }

  GetPaging(){
    this.paging.keyword = this.searchText
    this.service.GetEmployeePaging(this.paging).subscribe((res)=>{
        this.datas = res.items
        this.PageCount = res.pageCount
        this.spinner = true
    })
  }

  PageChange(pagenumber : number) : void{
    this.paging.pageindex = pagenumber
    this.GetPaging()
  }
}
