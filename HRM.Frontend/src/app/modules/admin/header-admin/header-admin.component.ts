import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';
import { SystemService } from 'src/Services/System/System.service';

@Component({
  selector: 'header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent implements OnInit {
  IsMenuCollapsed = false;
  data_items: any = {};
  flagAppear:boolean =false





  constructor(private elementRef: ElementRef, private _systemService: SystemService,) { }

  ngOnInit() {
    let lan = localStorage.getItem("language")
    if (lan == null) {
      lan = '0'
    }
    
    this._systemService.GetMenuLanguage('HA000000', lan).subscribe((res) => {
     this.data_items = res;
     
     this.flagAppear =true
    });
    
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
