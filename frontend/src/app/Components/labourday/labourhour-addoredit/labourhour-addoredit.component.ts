import { Component, Input, OnInit } from '@angular/core';
import { Day } from 'src/Model/DayinLabourhour/Day';

@Component({
  selector: 'app-labourhour-addoredit',
  templateUrl: './labourhour-addoredit.component.html',
  styleUrls: ['./labourhour-addoredit.component.css']
})
export class LabourhourAddoreditComponent implements OnInit {
  @Input() id:number=0
  editrequest:any={
    id:1,
    name:"111",
    factor:2,

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
