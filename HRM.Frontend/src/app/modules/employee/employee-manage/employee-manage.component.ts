import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-manage',
  templateUrl: './employee-manage.component.html',
  styleUrls: ['./employee-manage.component.css']
})
export class EmployeeManageComponent implements OnInit {

  constructor() { }
  listofdata : any[] = [
    {
      id : 1,
      name : "Thanh",
      img : "",
      active : "",
    },
    {
      id : 2,
      name : "Thinh",
      img : "",
      active : ""
    },
    {
      id : 3,
      name : "Thien",
      img : "",
      active : ""
    }
  ]
  listofdatatopush : any[] = []

  ngOnInit() {
    
  }

  


}
