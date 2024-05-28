import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-employee',
  templateUrl: './navigation-employee.component.html',
  styleUrls: ['./navigation-employee.component.scss']
})
export class NavigationEmployeeComponent {
  @Output() NavCollapsedMob = new EventEmitter();
  windowWidth = window.innerWidth;

  // public method
  navCollapseMob() {
    if (this.windowWidth < 1025) {
      this.NavCollapsedMob.emit();
    }
  }
}
