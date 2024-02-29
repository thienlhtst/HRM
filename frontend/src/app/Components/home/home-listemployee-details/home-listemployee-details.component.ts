import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-listemployee-details',
  templateUrl: './home-listemployee-details.component.html',
  styleUrls: ['./home-listemployee-details.component.css']
})
export class HomeListemployeeDetailsComponent implements OnInit {
  @Input() items:any[]
  constructor() { }

  ngOnInit() {
  }

}
