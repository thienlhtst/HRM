import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomelistLabour } from 'src/Model/DayinLabourhour/HomelistLabour';
import { LabourHourService } from 'src/Services/LabourHour/LabourHour.service';

@Component({
  selector: 'app-labourday-list',
  templateUrl: './labourday-list.component.html',
  styleUrls: ['./labourday-list.component.css']
})
export class LabourdayListComponent implements OnInit {
  @Output() OpenAddorEdit : EventEmitter<any> = new EventEmitter()
  @Output() OpenAddorEditLabourHour : EventEmitter<any> = new EventEmitter()
  @Input() datalist:HomelistLabour[]
  constructor(private router : Router) { }

  ngOnInit() {
    
  }
  OpenAddofEdit(dataid:any,labourhourid:any){
    let request ={ 
      id:dataid,
      idlabour:labourhourid
    }
    this.OpenAddorEdit.emit(request);
    
  }
  OpenAddofEditLabourHour(id:any){
    this.OpenAddorEditLabourHour.emit(id)
  }
}
