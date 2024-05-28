import { Injectable } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface NavigationEmployeeItems {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  icon?: string;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationEmployee[];
}

export interface NavigationEmployee extends NavigationEmployeeItems {
  children?: NavigationEmployeeItems[];
}
const NavigationEmployeeItems = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
    {
        id: 'profile',
        title: 'Profile',
        type: 'item',
        classes: 'nav-item',
        url: '/profile',
        icon: 'ti ti-dashboard',
      },
      {
        id: 'contract',
        title: 'Contract',
        type: 'item',
        classes: 'nav-item',
        url: '/contract',
        icon: 'ti ti-dashboard',
      },
      {
        id: 'workhour',
        title: 'Work Hour',
        type: 'item',
        classes: 'nav-item',
        url: '/employeeworkhour',
        icon: 'ti ti-dashboard',
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
