import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Day } from 'src/Model/DayinLabourhour/Day';
import { LabourHourService } from 'src/Services/LabourHour/LabourHour.service';
import { ConfirmationDialogService } from '../../../../shared/components/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-labourday-addoredit',
  templateUrl: './labourday-addoredit.component.html',
  styleUrls: ['./labourday-addoredit.component.css']
})
export class LabourdayAddoreditComponent implements OnInit,OnChanges {
  @Output() onConfirm: EventEmitter<number> = new EventEmitter();
  @Input() id: number = 0;
  @Input() LabourhourSelect: any[];
  @Input() idlabour:number
  labourid:any=2
  namelabour:any
  editrequest: Day = {
    id: 1,
    idlb: '1',
    name: '111',
    days: 10,
    months: 11
  };
  constructor(private service: LabourHourService,private route : ActivatedRoute,private confirmationDialogService: ConfirmationDialogService) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    
    if (changes['id'] && this.id != 0) {
      this.GetbyID()
    }
    if(changes['idlabour']){
      this.labourid=changes['idlabour'].currentValue.toString()
      this.LabourhourSelect.forEach(x=>{
        if(x.id==this.labourid)
        this.namelabour= x.name
      })
    }
  }
  GetbyID(){
    this.service.GetbyIDLabourDay(this.id).subscribe((res) => {
      this.editrequest = {
        id: res.id,
        idlb: res.idlb,
        name: res.name,
        days: res.days,
        months: res.months
      };
    });
  }
  ngOnInit() {
    if (this.id != 0) {
      this.GetbyID()
    }
      this.labourid= this.idlabour.toString()
      this.LabourhourSelect.forEach(x=>{
        if(x.id==this.labourid)
        this.namelabour= x.name
      })
  }



  Add(data: any) {
    let requestadd={
    idlb: this.labourid,
    name: data.name,
    days: parseInt(data.day),
    months: parseInt(data.month)
    }
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to Add ?')
    .then((confirmed) =>{
      if(confirmed) 
      this.service.CreateLabourDay(requestadd).subscribe((res)=>{
        this.onConfirm.emit(res)
      })
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    
    
    
   
  }
  Edit() {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to Edit ?')
    .then((confirmed) =>{
      if(confirmed) 
      this.service.UpdateLabourDay(this.editrequest).subscribe((res)=>{
        this.onConfirm.emit(res)
      })
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    
  }


}
