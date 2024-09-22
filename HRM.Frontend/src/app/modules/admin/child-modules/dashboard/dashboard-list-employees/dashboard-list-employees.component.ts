import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-list-employees',
  templateUrl: './dashboard-list-employees.component.html',
  styleUrls: ['./dashboard-list-employees.component.css']
})
export class DashboardListEmployeesComponent implements OnInit {
  @Input() items:any[]=[]

  constructor() { }

  ngOnInit() {
  }

}
