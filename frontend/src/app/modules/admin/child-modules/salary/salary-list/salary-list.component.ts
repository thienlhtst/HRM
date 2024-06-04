/* eslint-disable @typescript-eslint/no-explicit-any */
import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SalaryModel } from 'src/Model/SalaryModel';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { SalaryService } from 'src/Services/Salary/salary.service';
import { NotificationComponent } from '../../../../shared/components/Notification/Notification.component';
import { ConfirmationDialogService } from '../../../../shared/components/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-salary-list',
  templateUrl: './salary-list.component.html',
  styleUrls: ['./salary-list.component.scss','../../../../scss/shared/sreach.scss','../../../../scss/shared/button.scss']
})
export class SalaryListComponent implements OnInit{
  @ViewChild(NotificationComponent) child: NotificationComponent;

  constructor(private service : SalaryService,private router : Router,private confirmationDialogService: ConfirmationDialogService){}
  datas : SalaryModel[]
  searchText : any
  message:any
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
    this.ShowForm= false
    this.GetPaing()
  }


  Delete(event:any,id : string){
    this.confirmationDialogService
      .confirm('Please confirm..', 'Do you really want to Delete ?')
      .then((confirmed) => {
        if (confirmed) {
          this.service.DeleteSalary(id).subscribe((res)=>{
            this.onConfirm(res)
          })
        
        }
      })
  }
     
  
  onConfirm(flag: any) {
    if (flag == 1) {
      this.message = 'success';
      setTimeout(() => {
        this.child.showSuccess(this.child.successTpl);

      }, 1);
      this.OnSuccess()

    } else {
      this.message = 'faill';
      this.child.showDanger(this.child.dangerTpl);
    }
  }

  GetPaing(){
    this.spinner  = false
    this.datas=[]
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

  
  
  onSearchChange(){
     this.paging.keyword = this.searchText
     this.GetPaing();
  }

}
