import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { WorkHourCreateRequest} from 'src/Model/Workhours/WorkHourCreateRequest'
import { WorkhourEditRequest } from 'src/Model/Workhours/WorkhourEditRequest';
import { WorkHourService } from 'src/Services/WorkHour/WorkHour.service';
@Component({
  selector: 'app-workhour-addoredit',
  templateUrl: './workhour-addoredit.component.html',
  styleUrls: ['./workhour-addoredit.component.css']
})
export class WorkhourAddoreditComponent implements OnInit {
  @Output() onConfirm: EventEmitter<number> = new EventEmitter();

  id : string =''
  createrequest:WorkHourCreateRequest
  editrequest:WorkhourEditRequest
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
  constructor(private services:WorkHourService, private router : Router,private route : ActivatedRoute ) {
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
    console.log(event.target.value)
  }
  Confirm(data:any){
    console.log(this.data)
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
    if(this.id=='null'){
      request.employeesID=data.idemployee
      request.lbdid= data.idlb
      this.services.CreateWorkhour(request).subscribe((res)=>{
        this.router.navigate(['/workhour'], { queryParams: { flag: res } });
      })
    }else
    {
      this.services.EditWorkhour(this.data).subscribe((res)=>{
        this.router.navigate(['/workhour'], { queryParams: { flag: res } });
      })
    }
  }
}
