import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-workhour-list-detail',
  templateUrl: './workhour-list-detail.component.html',
  styleUrls: ['../../../../scss/shared/button.scss']

})
export class WorkhourListDetailComponent implements OnInit,OnChanges {
  @Input() listitems:any[]
  @Output() OnChooseid :EventEmitter<any> = new EventEmitter();
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['listitems']) {
    }
  }
  constructor() { }

  ngOnInit() {

  }
  EventUpdateorDelete(id:any,flag:number){
    let eventchoose={
      id:id,
      flag:flag
    }
    this.OnChooseid.emit(eventchoose)
  }
}
