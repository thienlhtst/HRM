/* eslint-disable no-empty */
import { OnChanges, SimpleChanges, ViewChild } from '@angular/core';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PositionModel } from 'src/Model/PositionModel';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { PositionServiceService } from 'src/Services/Position/PositionService.service';
import { NotificationComponent } from 'src/app/theme/shared/components/Notification/Notification.component';
import { ConfirmationDialogService } from 'src/app/theme/shared/components/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.scss','../../../../scss/shared/sreach.scss','../../../../scss/shared/button.scss']
})
export class PositionListComponent implements OnInit,OnChanges{
  constructor(private service : PositionServiceService,private router : Router ,private confirmationDialogService: ConfirmationDialogService){}
  @ViewChild(NotificationComponent) child: NotificationComponent;
  message:any
  datas : PositionModel[]
  searchText : string = ""
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
    this.GetPaging();

  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['datas']){

    }
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
    this.ShowForm =false

  }

  onSearchChange(){
    this.GetPaging()
  }




  GetPaging(){
    this.paging.keyword = this.searchText
    this.service.GetPositionPaging(this.paging).subscribe((res)=>{
      this.datas = res.items
      this.PageCount = res.pageCount
      this.spinner = true
    })
  }

  Delete(event : any, id : string){
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to Add ?')
    .then((confirmed) =>{
      if(confirmed)
      this.service.DeletePosition(id).subscribe((res)=>{
        if(res==1){
          this.NoficationAlert(res)
          this.GetPaging()
        }
      })
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));



  }

  PageChange(page : number):void{
    this.paging.pageindex = page
    this.GetPaging()
  }


  NoficationAlert(flag:any){
    if (flag == 1) {
      this.message = 'success';
      this.child.showSuccess(this.child.successTpl);

      this.OnSuccess()
      this.GetPaging()
    } else {
      this.message = 'faill';
      this.child.showDanger(this.child.dangerTpl);
    }
  }


}
