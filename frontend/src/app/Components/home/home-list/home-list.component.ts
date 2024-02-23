/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {
  pagenumber:number=1;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  numberchange(numberchange:number):void{
    this.pagenumber = numberchange
  }

}
