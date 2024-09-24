import { Component, Input, OnInit } from '@angular/core';
import { SystemService } from 'src/Services/System/System.service';

@Component({
  selector: 'dashboard-list-employees',
  templateUrl: './dashboard-list-employees.component.html',
  styleUrls: ['./dashboard-list-employees.component.css']
})
export class DashboardListEmployeesComponent implements OnInit {
  flagAppear: boolean = false;
  dataslanguage:any[]=[]
  @Input() items:any[]=[]

  constructor(private systemServices:SystemService) { }

  ngOnInit() {
    this.systemServices.GetLangugeLayout('e-dashboard-admin',this.systemServices.getLanguage()).subscribe((res) => {
      this.dataslanguage = res;
      this.flagAppear = true
    });
  }

}
