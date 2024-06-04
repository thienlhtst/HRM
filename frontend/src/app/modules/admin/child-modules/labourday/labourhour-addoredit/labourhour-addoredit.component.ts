/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-output-on-prefix */
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { LabourHourService } from 'src/Services/LabourHour/LabourHour.service';
import { ConfirmationDialogService } from '../../../../shared/components/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-labourhour-addoredit',
  templateUrl: './labourhour-addoredit.component.html',
  styleUrls: ['./labourhour-addoredit.component.css']
})
export class LabourhourAddoreditComponent implements OnInit,OnChanges {
  @Output() onConfirm: EventEmitter<number> = new EventEmitter();

  @Input() id:number=0
  editrequest:any={
    id:1,
    name:"",
    factor:0,

  }
  constructor(private service: LabourHourService,private confirmationDialogService: ConfirmationDialogService) {

  }
  GetbyID(){
    this.service.GetbyIDLabourHour(this.id.toString()).subscribe((res)=>{
      this.editrequest={
        id:res.id,
        name:res.name,
        factor:res.factor,
      }
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id'] && this.id != 0) {
      this.GetbyID()
    }
  }

  ngOnInit() {
    if(this.id!=0)
      this.GetbyID()

  }
  Add(data:any){
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to Add ?')
    .then((confirmed) =>{
      if(confirmed) this.service.CreateLabourHour(data).subscribe((res)=>{
        this.onConfirm.emit(res)
       })
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

  }
  Edit(){
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to Edit ?')
    .then((confirmed) =>{
      if(confirmed)  this.service.UpdateLabourHour(this.editrequest).subscribe((res)=>{
        this.onConfirm.emit(res)
      })
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
}
}
