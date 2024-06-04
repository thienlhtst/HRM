/* eslint-disable no-empty */
/* eslint-disable no-cond-assign */
/* eslint-disable no-constant-condition */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-output-on-prefix */
import { Component, Input, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { Alert } from 'src/Model/Alert';
import { Allowancemodel } from 'src/Model/Allowance/AllowanceModel';
import { AllowanceServiceService } from 'src/Services/Allowance/AllowanceService.service';
import { FormOptionsService } from 'src/Services/FormOptions/form-options.service';
import { RegexService } from 'src/Services/Regex/regex.service';
import { NotificationComponent } from '../../../../shared/components/Notification/Notification.component';
import { ConfirmationDialogService } from '../../../../shared/components/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-allowance-options',
  templateUrl: './allowance-options.component.html',
  styleUrls: ['./allowance-options.component.scss','../../../../scss/shared/sreach.scss','../../../../scss/shared/button.scss']
})
export class AllowanceOptionsComponent implements OnInit {
  constructor(private service : AllowanceServiceService,
    private route : ActivatedRoute,
    private router : Router,
    private confirmService : ConfirmationDialogService,
    private regex : RegexService,
    private FormOptions : FormOptionsService
    ){}
  @Input() selectedID : string
  @Output() onUpdate: EventEmitter<string> =   new EventEmitter();
  @Output() onConfirm : EventEmitter<number> = new EventEmitter();
  @Output() onCancel : EventEmitter<boolean> = new EventEmitter();
  messageRequest : string = ''
  data : Allowancemodel
  Action : string
  alert : Alert
  message: any = '';




  @ViewChild(NotificationComponent) childnoti : NotificationComponent
  ngOnInit(): void {
    if(this.selectedID == ''){
      console.log('')
    }
    else{
      this.GetAllowanceID()
    }

  }

  GetAllowanceID(){
      this.service.getAllowanceByID(this.selectedID).subscribe((res)=>{
        this.data = res
    })
  }


  SetAction(action : string){
    this.Action = action
  }


  Add(data : Allowancemodel){
     this.alert = {
       type : 'success',
       message : 'This is an success alert'
     }
    this.confirmService.confirm('Please Confirm','You wanna add ? ')
    .then((confirmed)=>{
      if(confirmed){
        this.service.CreateAllowance(data).subscribe({
          next: (res) => {
            this.confirmService.confirm('Success', 'Add Succeed');
            this.onConfirm.emit(res);
          },
          error: (error) => {
            this.message = true;
            this.alert.type = 'danger';
            this.alert.message = 'Duplicate id are not allowed,Name is just A-Z, and money is just 0 - 9, please check your input';
          }
        });
      }
    })




  }

  Update(allowance : Allowancemodel){
      this.confirmService.confirm('Plese Confirm','You wanna update ? ')
      .then((confirmed)=>{
        if(confirmed){
          this.onUpdate.emit(this.selectedID)
          this.service.UpdateAllowance(this.selectedID,allowance).subscribe({
            next:(res)=>{
            this.confirmService.confirm('Success','Update Succeed')
            this.onConfirm.emit(res)

            },
            error : (error) =>{
              this.message = true;
              this.alert.type = 'danger';
              this.alert.message = 'Duplicate id are not allowed,Name is just A-Z, and money is just 0 - 9, please check your input';

            }

        })
      }
    })


  }

  onCanceled(){
    this.onCancel.emit(false)
  }



  flagchangeHandler(flagchange: boolean) {
    this.message = flagchange;
  }
}
