import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  
  constructor() { }
  @Input() titleinput : string = ""
  @Input() iconinput : string = ""
  @Input() datainput : any[] = []
  //@Input() list_items : any[] = []
  list_items : any[] = [ {
    sys:{
      FunctionID: 1,
      label: 'Basic Information',
      icon: 'bi bi-person-square',
    },
    sysList: [
      {
        FunctionID: 1,
        label: 'Thông tin cơ bản',
        name: 'name',
        description:'Nhập tên',
        kindInput: 0,
        pattern: '[0-9]+',
      },
      {
        FunctionID: 2,
        label: 'Thông tin cơ bản',
        name: 'name',
      }
    ]
  }]
  ngOnInit() {
    
  }

  getGroups(arr: any[], groupSize: number): any[][] {
    const groups = [];
    for (let i = 0; i < arr.length; i += groupSize) {
      groups.push(arr.slice(i, i + groupSize));
    }
    return groups;
  }


}
