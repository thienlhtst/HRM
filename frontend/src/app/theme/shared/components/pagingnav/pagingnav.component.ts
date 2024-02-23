import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-pagingnav',
  standalone: true,
	imports: [NgbPaginationModule],
  templateUrl: './pagingnav.component.html',
  styleUrls: ['./pagingnav.component.css']
})
export class PagingnavComponent implements OnInit,OnChanges  {

  @Input() pagesize :number
  page =1;
  totalpage:number=1
   @Output() numberchange: EventEmitter<number> =   new EventEmitter();
  constructor() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pagesize']) {
      this.totalpage=changes['pagesize'].currentValue *10
    }
  }

  ngOnInit() {

    this.totalpage = this.pagesize*10
    console.log(this.totalpage)
  }
  onchange(){
    this.numberchange.emit(this.page)
  }

}
