import { Component, OnInit } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listofheader : any[] =[{
    id:1,
    name:"ID",
    column:'ID'


  },{
    id:2,
    name:"Name",
    column:'Name'
  }
]

  listofdata : any[] =[
    {
      ID:1,
      Name:"A"
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
