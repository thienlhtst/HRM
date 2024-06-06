import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-navigation-employee',
  templateUrl: './navigation-employee.component.html',
  styleUrls: ['./navigation-employee.component.scss']
})
export interface NavigationEmployeeItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  icon?: string;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationEmployeeComponent[];
}

export interface NavigationEmployeeComponent extends NavigationEmployeeItem {
  children?: NavigationEmployeeItem[];
}
const NavigationEmployeeItems = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
    {
        id: 'home',
        title: 'Home',
        type: 'item',
        classes: 'nav-item',
        url: '/home',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      },
      {
        id: 'qrcode',
        title: 'qrcode',
        type: 'item',
        classes: 'nav-item',
        url: '/qrcode',
        icon: 'ti ti-dashboard',
        target:true
      }
    ]
  },


];

@Injectable()
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class NavigationEmployeeItem {
  get() {
    return NavigationEmployeeItems;
  }
}
