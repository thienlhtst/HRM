/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    this.check()
  }
  @Input() styleTable : any[] | undefined
  @Input() listofheader : any[] | undefined
  @Input() listofdata : any[] | undefined

  check(){
    console.log(this.listofheader)
    console.log(this.listofdata)
  }
}
