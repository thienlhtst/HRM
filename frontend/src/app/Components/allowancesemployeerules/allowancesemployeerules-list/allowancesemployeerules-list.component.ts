/* eslint-disable @typescript-eslint/no-unused-vars */
import { OnInit, ViewChild } from '@angular/core';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { AERulesModel } from 'src/Model/AllowancesAndEmployeeRules/AERulesModel';
import { AllowancesAndEmployeeRulesService } from 'src/Services/AllowancesAndEmployeeRules/allowances-and-employee-rules.service';
import { NotificationComponent } from 'src/app/theme/shared/components/Notification/Notification.component';
import { PagingnavComponent } from 'src/app/theme/shared/components/pagingnav/pagingnav.component';

@Component({
  selector: 'app-allowancesemployeerules-list',
  templateUrl: './allowancesemployeerules-list.component.html',
  styleUrls: ['./allowancesemployeerules-list.component.scss']
})
export class AllowancesemployeerulesListComponent implements OnInit {
  constructor(private service : AllowancesAndEmployeeRulesService){}

  datas : AERulesModel[]
  searchText : string = ''
  message : string
  ShowForm : boolean = false
  ShowFormOptions : boolean = false

  @ViewChild(PagingnavComponent) child: PagingnavComponent;
  @ViewChild(NotificationComponent) childnoti: NotificationComponent;
  ngOnInit(): void {
    this.GetAll()
  }

  ButtonClickToOptions(){
    this.ShowFormOptions = !this.ShowFormOptions
    this.ShowForm = !this.ShowForm
  }

  OnConfirm(event : any){
    this.message = 'success'
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
