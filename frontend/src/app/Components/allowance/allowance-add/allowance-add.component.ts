/* eslint-disable @angular-eslint/no-output-on-prefix */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Allowancemodel } from './../../../../Model/AllowanceModel';
import { Component, Output, ViewChild,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AllowanceServiceService } from 'src/Services/Allowance/AllowanceService.service';
import { NotificationComponent } from 'src/app/theme/shared/components/Notification/Notification.component';
@Component({
  selector: 'app-allowance-add',
  templateUrl: './allowance-add.component.html',
  styleUrls: ['./allowance-add.component.scss']
})



export class AllowanceAddComponent {
  messageRequest : string = ''
  constructor(private service : AllowanceServiceService, private router : Router){}
  @ViewChild(NotificationComponent) childnoti:NotificationComponent
  @Output() onSuccess : EventEmitter<void> = new EventEmitter()



  Add(data : Allowancemodel){
    this.service.CreateAllowance(data).subscribe((response)=>{
      if(response){
        alert('Success')
          setTimeout(() => {
            this.onSuccess.emit()
          }, 5);
          window.location.reload()
      }
      else{
        alert('Fail')
          setTimeout(() => {
            this.onSuccess.emit()
          }, 5);
      }

    })
  }

}
