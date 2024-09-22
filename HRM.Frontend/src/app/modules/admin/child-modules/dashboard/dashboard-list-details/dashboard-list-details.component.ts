import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-list-details',
  templateUrl: './dashboard-list-details.component.html',
  styleUrls: ['./dashboard-list-details.component.css']
})
export class DashboardListDetailsComponent implements OnInit {
  @Input() pagenumber:number =1
  @Input() items:any[] =[]
  constructor() { }

  ngOnInit() {
  }

}
