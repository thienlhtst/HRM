/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() listofheader : any[] = [
    {
    id: '1',
    name : 'id',
  },
  {
    id:'2',
    name:'name'
  },
  {
    id:'3',
    name : 'age'
  }
  ]

  @Input() listofdata : any[] = [
    {
      data1 : '',
      data2 : '',
      data3 : ''
    }
    ,
    {
      data1 : '',
      data2 : '',
      data3 : ''
    },
    {
      data1 : '',
      data2 : '',
      data3 : ''
    }
  ]


}
