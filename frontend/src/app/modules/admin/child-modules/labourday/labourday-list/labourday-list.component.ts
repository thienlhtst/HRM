/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomelistLabour } from 'src/Model/DayinLabourhour/HomelistLabour';
import { LabourHourService } from 'src/Services/LabourHour/LabourHour.service';
import { WorkHourService } from 'src/Services/WorkHour/WorkHour.service';
import { ConfirmationDialogService } from '../../../../shared/components/confirmation-dialog/confirmation-dialog.service'
@Component({
  selector: 'app-labourday-list',
  templateUrl: './labourday-list.component.html',
  styleUrls: ['./labourday-list.component.css','../../../../scss/shared/sreach.scss']
})
export class LabourdayListComponent implements OnInit {
  @Output() OpenAddorEdit : EventEmitter<any> = new EventEmitter()
  @Output() OpenAddorEditLabourHour : EventEmitter<any> = new EventEmitter()
  @Output() DeleteEvent : EventEmitter<any> = new EventEmitter()

  @Input() datalist:HomelistLabour[]
  searchText:any
  constructor(private router : Router,private service:LabourHourService,private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {

  }
  OpenAddofEdit(dataid:any,labourhourid:any){
    let request ={
      id:dataid,
      idlabour:labourhourid
    }
    this.OpenAddorEdit.emit(request);

  }
  ClicktoShowFormAdd(){
    this.OpenAddorEditLabourHour.emit(0)
  }
  DeleteLabourDay(id:any){
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to Delete ?')
    .then((confirmed) =>{
      if(confirmed) this.service.DeleteLabourDay(id).subscribe((res)=>{
        this.DeleteEvent.emit(res)
      })
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

  }
  OpenAddofEditLabourHour(id:any){
    this.OpenAddorEditLabourHour.emit(id)
  }
  DeleteLabourHour(id:any){
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to Delete this and all Days ?')
    .then((confirmed) =>{
      if(confirmed) this.service.DeleteLabourHour(id).subscribe((res)=>{
        this.DeleteEvent.emit(res)
      })
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    
  }
}
