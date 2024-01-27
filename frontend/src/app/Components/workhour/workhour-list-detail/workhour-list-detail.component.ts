import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-workhour-list-detail',
  templateUrl: './workhour-list-detail.component.html',
})
export class WorkhourListDetailComponent implements OnInit,OnChanges {
  @Input() listitems:any[]

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['listitems']) {
    }
  }
  constructor() { }

  ngOnInit() {

  }

}
