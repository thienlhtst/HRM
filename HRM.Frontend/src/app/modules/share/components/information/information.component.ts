import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  
  constructor() { }
  @Input() list_data_input : any[] = []
  


  ngOnInit() {
    console.log(this.list_data_input)
  }

  getGroups(arr: any[], groupSize: number): any[][] {
    const groups = [];
    for (let i = 0; i < arr.length; i += groupSize) {
      groups.push(arr.slice(i, i + groupSize));
    }
    return groups;
  }


}
