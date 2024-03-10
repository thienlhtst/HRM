/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-output-on-prefix */
import { Component, Input, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Allowancemodel } from 'src/Model/AllowanceModel';
import { AllowanceServiceService } from 'src/Services/Allowance/AllowanceService.service';
import { NotificationComponent } from 'src/app/theme/shared/components/Notification/Notification.component';

@Component({
  selector: 'app-allowance-update',
  templateUrl: './allowance-update.component.html',
  styleUrls: ['./allowance-update.component.scss']
})
export class AllowanceUpdateComponent implements OnInit {
  constructor(private service : AllowanceServiceService,private route : ActivatedRoute,private router : Router){}
  @Input() selectedID : string
  @Output() onUpdate: EventEmitter<string> =   new EventEmitter();
  @Output() onSuccess: EventEmitter<void> = new EventEmitter();
  messageRequest : string = ''
  data : Allowancemodel
  ChangeUpdateMode: boolean = false;

  @ViewChild(NotificationComponent) childnoti : NotificationComponent
  ngOnInit(): void {
    this.GetAllowanceID()
    console.log(this.selectedID)
  }

  GetAllowanceID(){
      this.service.getAllowanceByID(this.selectedID).subscribe((res)=>{
        this.data = res
    })
  }




  Add(data : Allowancemodel){
    console.log(data)
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

  Update(allowance : Allowancemodel){
      console.log(allowance)
      this.onUpdate.emit(this.selectedID)
      this.service.UpdateAllowance(this.selectedID,allowance).subscribe((response)=>{
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
