/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalaryModel } from 'src/Model/SalaryModel';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { SalaryService } from 'src/Services/Salary/salary.service';

@Component({
  selector: 'app-salary-list',
  templateUrl: './salary-list.component.html',
  styleUrls: ['./salary-list.component.scss','../../../../scss/shared/sreach.scss','../../../../scss/shared/button.scss']
})
export class SalaryListComponent implements OnInit{
  constructor(private service : SalaryService,private router : Router){}
  datas : SalaryModel[]
  searchText : any
  paging : Requestpaging={
    keyword : '',
    pageindex : 1,
    pagesize : 10
  }
  ShowFormOptions : boolean = false
  ShowForm : boolean = false
  selectedID : string
  PageCount : number = 1
  spinner : boolean = false

  ngOnInit(): void {
    this.GetPaing()

  }

  ClicktoShowFormAdd(): void{
    this.ShowFormOptions = !this.ShowFormOptions
    this.ShowForm =!this.ShowForm
    this.selectedID = ""
  }

  ButtonClickToUpdate(id : string){
    this.ShowFormOptions =! this.ShowFormOptions
    this.ShowForm =!this.ShowForm
    this.selectedID = id
  }



  OnSuccess(){
    this.ShowFormOptions = false
  }


  Delete(event:any,id : string){
    if(confirm('Delete this data ?')){
      this.service.DeleteSalary(id).subscribe((res)=>{
        if(res){
          alert('Delete Success');
          this.GetPaing()
        } else {
          alert('Fail')
          window.location.reload()
        }
      })
    }
  }


  GetPaing(){
    this.service.GetSalaryPaging(this.paging).subscribe((res)=>{
      this.datas = res.items
      this.PageCount = res.pageCount
      this.spinner = true
    })
  }

  PageChange(page : number){
    this.paging.pageindex = page
    this.GetPaing()
  }

  GetAll(){
    this.service.GetSalary().subscribe((res)=>{
      this.datas = res
    })
  }

}
