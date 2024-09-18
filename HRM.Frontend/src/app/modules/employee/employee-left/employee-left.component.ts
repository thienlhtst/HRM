import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employee-left',
  templateUrl: './employee-left.component.html',
  styleUrls: ['./employee-left.component.css']
})
export class EmployeeLeftComponent implements OnInit {
  constructor() { }
  ngOnInit() {

  }

    
  menuItem: any[] = [
      {     
        id : 1,
        title : 'Dashboard',
        icon : 'bi bi-person',  
        route :   'dashboard'  
      },
      {
        id : 2,
        title : 'Contract',
        icon : 'bi bi-archive-fill',  
        route : 'contract' 
      },
      {
        id : 3,
        title : 'Information',
        icon : 'bi bi-person',
        route : 'infor'
      },
    ]


}
