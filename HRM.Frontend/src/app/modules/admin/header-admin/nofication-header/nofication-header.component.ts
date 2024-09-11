import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'nofication-header',
  templateUrl: './nofication-header.component.html',
  styleUrls: ['./nofication-header.component.scss']
})
export class NoficationHeaderComponent implements OnInit {
  IsMenuCollapsed = false;
  elementRef: any;
  constructor() { }

  ngOnInit() {
  }
  toggleMenu() {
    this.IsMenuCollapsed = !this.IsMenuCollapsed;
  }
 
}
