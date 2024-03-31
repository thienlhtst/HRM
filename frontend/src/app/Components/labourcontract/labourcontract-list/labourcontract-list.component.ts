/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ViewChild } from '@angular/core';
import { LabourContractModel } from 'src/Model/LabourContract/LabourContractModel';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { LabourContractServiceService } from 'src/Services/LabourContract/labour-contract-service.service';
import { NotificationComponent } from 'src/app/theme/shared/components/Notification/Notification.component';
import { ConfirmationDialogService } from 'src/app/theme/shared/components/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-labourcontract-list',
  templateUrl: './labourcontract-list.component.html',
  styleUrls: ['./labourcontract-list.component.scss','../../../../scss/shared/sreach.scss','../../../../scss/shared/button.scss']
})
export class LabourcontractListComponent implements OnInit {
  @ViewChild(NotificationComponent) child: NotificationComponent;
  message:any
  constructor(private service : LabourContractServiceService,
              private confirm : ConfirmationDialogService
    ){}
  ngOnInit(): void {
    this.GetPaging()
  }
  searchText : any
  datas : LabourContractModel[]
  ShowFormOption : boolean = false
  ShowForm : boolean = false
  selectedID : string
  spinner : boolean = false
  paging : Requestpaging = {
    keyword : '',
    pageindex : 1,
    pagesize : 10
  }
  PageCount : number = 1



  ClicktoShowFormAdd(): void{
    this.ShowFormOption = !this.ShowFormOption
    this.ShowForm =!this.ShowForm
    this.selectedID = ''
  }

  ButtonClickToUpdate(id : string){
    this.ShowFormOption =! this.ShowFormOption
    this.ShowForm =!this.ShowForm
    this.selectedID = id

  }

  OnSuccess(){
    this.ShowFormOption = false
    this.ShowForm= false
    this.GetPaging()
  }

  Delete(event:any,id : string){
    this.confirm.confirm('Please Confirm','You wanna delete id : ' + id)
   .then((confirmed)=>{
    if(confirmed){
      this.service.DeleteContract(id).subscribe((res)=>{
          this.NoficationAlert(res)
        })
      }
    })
  }

  GetPaging(){
    this.datas=[]
    this.service.GetAllContractPaging(this.paging).subscribe((res)=>{
      this.datas = res.items
      this.PageCount = res.pageCount
    })
  }

  PageChange(page : number): void{
    this.paging.pageindex = page
    this.GetPaging()
  }
  NoficationAlert(flag:any){
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
}
