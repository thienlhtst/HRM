/* eslint-disable @typescript-eslint/no-unused-vars */
import { OnInit, ViewChild } from '@angular/core';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { NotificationComponent } from 'src/app/modules/share/components/Notification/Notification.component';
import { PagingnavComponent } from 'src/app/modules/share/components/pagingnav/pagingnav.component';
import { AllowanceRulesModel } from 'src/Model/AllowancesAndEmployeeRules/AllowanceRulesModel';
import { AllowancesAndEmployeeRulesService } from 'src/Services/AllowancesAndEmployeeRules/allowances-and-employee-rules.service';

@Component({
  selector: 'app-allowancesemployeerules-list',
  templateUrl: './allowancesemployeerules-list.component.html',
  styleUrls: ['./allowancesemployeerules-list.component.scss']
})
export class AllowancesemployeerulesListComponent implements OnInit {
  constructor(private service : AllowancesAndEmployeeRulesService){}

  datas : AllowanceRulesModel[]=[]
  searchText : string = ''
  message : string=''
  ShowForm : boolean = false
  ShowFormOptions : boolean = false

  @ViewChild(PagingnavComponent) child: PagingnavComponent | undefined;
  @ViewChild(NotificationComponent) childnoti: NotificationComponent | undefined;
  ngOnInit(): void {
    this.GetAll()
  }

  ButtonClickToOptions(){
    this.ShowFormOptions = !this.ShowFormOptions
    this.ShowForm = !this.ShowForm
  }

  OnConfirm(event : any){
    this.message = 'success'
    if(this.childnoti && this.childnoti.successTpl)
      this.childnoti.showSuccess(this.childnoti.successTpl)
      this.ShowForm = false
      this.service.GetAll().subscribe((res)=>{
        this.datas = res
      })
  }

  OnSuccess(){
    this.ShowFormOptions = !this.ShowFormOptions
  }

  GetAll(){
    this.service.GetAll().subscribe((res)=>{
      this.datas = res
    })
  }

}
