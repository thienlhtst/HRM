import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-infor',
  templateUrl: './employee-infor.component.html',
  styleUrls: ['./employee-infor.component.css']
})
export class EmployeeInforComponent implements OnInit {

  constructor() { }
  data : any[] = [
    {
      label : "ID",
      data : 1,
    },
    {
      label : "Name",
      data : "Thanh"
    }
  ]

  ngOnInit() {
  }

}
