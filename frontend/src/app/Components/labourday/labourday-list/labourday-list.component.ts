import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { int } from '@zxing/library/esm/customTypings';

@Component({
  selector: 'app-labourday-list',
  templateUrl: './labourday-list.component.html',
  styleUrls: ['./labourday-list.component.css']
})
export class LabourdayListComponent implements OnInit {
  @Output() OpenAddorEdit : EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  test(data:number){
    this.OpenAddorEdit.emit(data);
  }
}
