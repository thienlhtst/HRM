import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Day } from 'src/Model/DayinLabourhour/Day';

@Component({
  selector: 'app-labourday-addoredit',
  templateUrl: './labourday-addoredit.component.html',
  styleUrls: ['./labourday-addoredit.component.css']
})
export class LabourdayAddoreditComponent implements OnInit {
  @Output() onSuccess : EventEmitter<void> = new EventEmitter()
  @Input() id:number=0
  editrequest:Day={
    id:1,
    IDLB:1,
    name:"111",
    days:10,
    months:11,

  }
  constructor() { }

  ngOnInit() {
  }
  Add(data:any){
    console.log(data)
  }
  Edit(){
   
   console.log(this.editrequest)
  }
}
