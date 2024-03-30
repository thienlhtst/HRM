import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { WorkHourCreateRequest} from 'src/Model/Workhours/WorkHourCreateRequest'
import { WorkhourEditRequest } from 'src/Model/Workhours/WorkhourEditRequest';
import { NotificationService } from 'src/Services/Shared/Notification.service';
import { WorkHourService } from 'src/Services/WorkHour/WorkHour.service';
import { ConfirmationDialogService } from 'src/app/theme/shared/components/confirmation-dialog/confirmation-dialog.service';
import { WorkhourListComponent } from '../workhour-list/workhour-list.component';
import { NotificationComponent } from 'src/app/theme/shared/components/Notification/Notification.component';
@Component({
  selector: 'app-workhour-addoredit',
  templateUrl: './workhour-addoredit.component.html',
  styleUrls: ['./workhour-addoredit.component.css']
})
export class WorkhourAddoreditComponent implements OnInit {
  @Output() onConfirm: EventEmitter<number> = new EventEmitter();
  action: string;
  id : string =''
  message
  createrequest:WorkHourCreateRequest
  editrequest:WorkhourEditRequest
  @ViewChild(NotificationComponent) child: NotificationComponent;

  data:any={
    id: 0,
   employeesID :  0 ,
   employeesName : "" ,
   lbdid :  0 ,
   namelb:'',
   day : 1,
   month : 1,
   year : 2023,
   hourCheckin : 8,
   minuteCheckin : 30,
   hourCheckout : 17,
   minuteCheckout : 0
  }
  constructor(private services:WorkHourService, private router : Router,private route : ActivatedRoute,private confirmationDialogService: ConfirmationDialogService, private nofis: NotificationService ) {
    this.id = `${this.route.snapshot.paramMap.get('id')}`
    if(this.id!='null'){
      this.services.GetbyId(this.id).subscribe((res)=>
      {
        this.data={
          id: res.id,
         employeesID :  res.employeesID ,
         employeesName : res.employeesName ,
         lbdid : res.lbdid ,
         namelb: res.namelb,
         day : res.day,
         month : res.month,
         year : res.year,
         hourCheckin :res.hourCheckin,
         minuteCheckin : res.minuteCheckin,
         hourCheckout : res.hourCheckout,
         minuteCheckout : res.minuteCheckout
        }
      })
    }
   }

  ngOnInit() {
  }
  OnChangeDate(date : NgbDateStruct){
    this.data.day =date.day
    this.data.month =date.month
    this.data.year =date.year
  }
  OnchangeHour(flag:number,event:any){
  }

setAction(action: string) {
  this.action = action;
}
 
  Confirm(data:any){
    if(this.action=='confirm'){
    let request :any={
        id: this.data.id,
        employeesID :  this.data.employeesID ,
        lbdid : this.data.lbdid ,
        day : this.data.day,
        month : this.data.month,
        year : this.data.year,
        hourCheckin :this.data.hourCheckin,
        minuteCheckin : this.data.minuteCheckin,
        hourCheckout : this.data.hourCheckout,
        minuteCheckout : this.data.minuteCheckout
    }
    this.confirmationDialogService
    .confirm('Please confirm..', 'Do you really want to Confirm ?')
    .then((confirmed) => {
      if (confirmed) {
        if(this.id=='null'){
          request.employeesID=data.idemployee
          request.lbdid= data.idlb
          this.services.CreateWorkhour(request).subscribe((res)=>{
            if(res!=0)
            this.nofis.Setflag()
            this.router.navigate(['/workhour']);
          })
        }else
        {
          this.services.EditWorkhour(this.data).subscribe((res)=>{
            if(res!=0){
              this.nofis.Setflag()
            this.router.navigate(['/workhour']);}
          })
        }

      }
    })
    }else{
      this.router.navigate(['/workhour']);
    }
    



  }
  
}
