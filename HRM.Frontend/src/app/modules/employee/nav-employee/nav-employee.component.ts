import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'nav-employee',
  templateUrl: './nav-employee.component.html',
  styleUrls: ['./nav-employee.component.scss']
})
export class NavEmployeeComponent implements OnInit {
  IsMenuCollapsed = false;
  data_items: any = [];

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.data_items = [
      {
        Functionid:1,
        icon: 'bi bi-people',
        name: 'Trang chủ',
      }
    ]
  }
  toggleMenu() {
    this.IsMenuCollapsed = !this.IsMenuCollapsed;
  }
  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: { target: any; }): void {

    if (!this.elementRef.nativeElement.contains(event.target)) {
      if (this.IsMenuCollapsed) {
        this.IsMenuCollapsed = false;
      }
    }

  }
}
