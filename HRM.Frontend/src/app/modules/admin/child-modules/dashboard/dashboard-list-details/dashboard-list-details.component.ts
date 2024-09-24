import { Component, Input, OnInit } from '@angular/core';
import { SystemService } from 'src/Services/System/System.service';

@Component({
  selector: 'dashboard-list-details',
  templateUrl: './dashboard-list-details.component.html',
  styleUrls: ['./dashboard-list-details.component.css']
})
export class DashboardListDetailsComponent implements OnInit {
  flagAppear: boolean = false;
  dataslanguage:any[]=[]
  @Input() pagenumber:number =1
  @Input() items:any[] =[]
  constructor(private systemServices:SystemService) { }

  ngOnInit() {
    this.systemServices.GetLangugeLayout('wh-dashboard-admin',this.systemServices.getLanguage()).subscribe((res) => {
      this.dataslanguage = res;
      this.flagAppear = true
    });
  }

}
