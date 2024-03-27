
/* eslint-disable no-empty */
import { animate, style, transition, trigger } from '@angular/animations';
import { OnChanges, SimpleChanges } from '@angular/core';
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllowEmployeeModel } from 'src/Model/Allowance/AllowEmployeeModel';
import { AllowanceRulesModel } from 'src/Model/Allowance/AllowanceRulesModel';
import { Allowancemodel } from 'src/Model/AllowanceModel';
import { EmployeeRulesModel } from 'src/Model/Employee/EmployeeRulesModel';
import { SalaryModelList } from 'src/Model/SalaryModelList';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { AllowanceServiceService } from 'src/Services/Allowance/AllowanceService.service';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { GeneralService } from 'src/Services/General/general.service';
import { NotificationComponent } from 'src/app/theme/shared/components/Notification/Notification.component';
import { ConfirmationDialogService } from 'src/app/theme/shared/components/confirmation-dialog/confirmation-dialog.service';
import { PagingnavComponent } from 'src/app/theme/shared/components/pagingnav/pagingnav.component';


@Component({
  selector: 'app-allowance-list',
  templateUrl: './allowance-list.component.html',
  styleUrls: ['./allowance-list.component.scss','../../../../scss/shared/sreach.scss','../../../../scss/shared/button.scss'],
  animations: [
    trigger('moveOut', [
      transition(':leave', [
        animate('500ms',)
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ])
  ]
})



export class AllowanceListComponent implements OnInit,OnChanges  {
  constructor(private service : AllowanceServiceService,
    private EmployeeService : EmployeeService,
    private generalService : GeneralService,
    private confirm : ConfirmationDialogService,
    private router : Router
     ){}
  datas:Allowancemodel[]
  messagerequest:string=''
  searchText : string = ""
  pagecount : number = 1
  ShowFormOptions : boolean = false
  ShowForm : boolean = false
  selectedID : string
  spinner : boolean = false


  paging : Requestpaging={
    keyword : '',
    pageindex : 1,
    pagesize : 10

  }

  @ViewChild(PagingnavComponent) child: PagingnavComponent;
  @ViewChild(NotificationComponent) childnoti: NotificationComponent;

  ngOnInit(): void{
    this.GetPaging()

  }



  ngOnChanges(changes: SimpleChanges): void {
    if(changes['datas']){

    }
  }

  ClicktoShowFormAdd(): void{
    this.ShowFormOptions = !this.ShowFormOptions
    this.ShowForm =!this.ShowForm
    this.selectedID = ''
  }

  ButtonClickToUpdate(id : string){
    this.ShowFormOptions =! this.ShowFormOptions
    this.ShowForm =!this.ShowForm
    this.selectedID = id

  }


  OnSearchChange(){
    this.GetPaging()

  }




  OnSuccess(){
    this.ShowFormOptions = false
  }



  GetAll(){
    this.service.getAllowance().subscribe((res)=>{
      this.datas = res

    })
  }

  GetPaging(){
    this.paging.keyword = this.searchText
    this.service.getAllowancePaging(this.paging).subscribe((res)=>{
          this.datas = res.items
          this.pagecount = res.pageCount
          this.spinner = true
    })
  }



  Delete(event:any,id : string){
   this.confirm.confirm('Please Confirm','You wanna delete id : ' + id)
   .then((confirmed)=>{
    if(confirmed){
      this.service.DeleteAllowance(id).subscribe((res)=>{
          this.confirm.confirm('Success','Delete Succeed')
          .then((confirmSuccess)=>{
            if(confirmSuccess) window.location.reload()
          })

        })
      }
    })
  }


  pagechange(pagenumber : number) : void{
    this.paging.pageindex = pagenumber
    this.GetPaging()
  }

  buttonStyle = {
    background: 'none',
    border: 'none',
    padding: '5',
    width: '50px', // Đặt chiều rộng mong muốn
    height: 'auto', // Đặt chiều cao tự động hoặc bạn có thể đặt giá trị cụ thể
  };


}
