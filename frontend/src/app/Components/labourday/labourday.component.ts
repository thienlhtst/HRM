import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labourday',
  templateUrl: './labourday.component.html',
  styleUrls: ['./labourday.component.css','../../../scss/shared/sreach.scss']
})
export class LabourdayComponent implements OnInit {
  ShowForm:boolean= false
  currentdata:number=0
  constructor() { }

  ngOnInit() {
  }
  OpenAddorEdit(data:any){
   
   if(data==this.currentdata)
   this.ShowForm=!this.ShowForm
    else this.ShowForm=true
    this.currentdata=data
    
  }
}
