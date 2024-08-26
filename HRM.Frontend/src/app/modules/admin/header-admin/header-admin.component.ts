import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent implements OnInit {
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
