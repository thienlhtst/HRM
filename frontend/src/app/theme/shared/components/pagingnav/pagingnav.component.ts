import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-pagingnav',
  standalone: true,
	imports: [NgbPaginationModule],
  templateUrl: './pagingnav.component.html',
  styleUrls: ['./pagingnav.component.css']
})
export class PagingnavComponent implements OnInit {

  @Input() pagesize! :number
  @Output() page =1;
  constructor() { 
    
  }

  ngOnInit() {
    this.pagesize = this.pagesize*10
  }
  
  
}
