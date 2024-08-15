import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  icon?: string;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
const NavigationItems = [
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
        url:  environment.routeadmin+ '/home',
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


  {
    id: 'UI',
    title: 'Pages',
    type: 'group',
    icon: 'icon-navigation',
    children: [
        {
          id :'allowance',
          title:'Allowance',
          type:'collapse',
          classes:'nav-item',
          icon:'bi bi-cash-coin',
          children :[
            {
              id:'allowance',
              title:'Allowance List',
              type:'item',
              url:environment.routeadmin+ '/allowance',
              classes:'nav-item',
              icon:'bi bi-currency-dollar',
              children:[
                {
                  id :'allowance',
                  title:'Update',
                  type:'item',
                  url:environment.routeadmin+ "/allowance/options",
                  classes:'nav-item',
                },
              ]
            },
            {
              id:'allowance',
              title:'Employee With Allowance',
              type:'item',
              url:environment.routeadmin+ '/ewa',
              classes:'nav-item',
              icon:'bi bi-people',
              children:[
                {
                  id :'ewa',
                  title:'Auto',
                  type:'item',
                  url:environment.routeadmin+ "/ewa/add",
                  classes:'nav-item',
                },
              ]
            },
            {
              id:'allowance',
              title:'Allowances and Employee Rules',
              type:'item',
              url:environment.routeadmin+ '/allowancesemployeerules',
              classes:'nav-item',
              icon:'bi bi-people',
              children:[
                {
                id :'aerules',
                title:'Auto',
                type:'item',
                url:environment.routeadmin+ "/allowancesemployeerules/add",
                classes:'nav-item',
              }
            ]
            }
          ]
        },
        {
          id:'employee',
          title:'Employee ',
          type:'collapse',
          classes:'nav-item',
          icon:'bi bi-person',
          children :[
            {
              id:'employee',
              title:'Employee List',
              type:'item',
              url:environment.routeadmin+ '/employee',
              classes:'nav-item',
              icon:'bi bi-file-person',
              children:[
                {
                  id :'employee',
                  title:'Add',
                  type:'item',
                  url:environment.routeadmin+ "/employee/add",
                  classes:'nav-item',
                },
                {
                  id :'employee',
                  title:'Update',
                  type:'item',
                  url:environment.routeadmin+ "/employee/update",
                  classes:'nav-item',
                },
                {
                  id :'employee',
                  title:'Details',
                  type:'item',
                  url:environment.routeadmin+ "/employee/details",
                  classes:'nav-item',
                }
              ]
            },
            {
              id:'position',
              title:'Position',
              type:'item',
              url:environment.routeadmin+ '/position',
              classes:'nav-item',
              icon:'bi bi-briefcase',
              children :[
                {
                  id :'position',
                  title:'Update',
                  type:'item',
                  url:environment.routeadmin+ "/position/options",
                  classes:'nav-item',
                },
              ]
            },
            {
              id:'rank',
              title:'Rank',
              type:'item',
              url:environment.routeadmin+ '/rank',
              classes:'nav-item',
              icon:'bi bi-card-checklist',
              children :[
                {
                  id :'rank',
                  title:'Update',
                  type:'item',
                  url:environment.routeadmin+ "/rank/options",
                  classes:'nav-item',
                },
              ]
            },
            {
              id:'salary',
              title:'Salary',
              type:'item',
              url:environment.routeadmin+ '/salary',
              classes :'nav-item',
              icon :'bi bi-receipt',
              children :[
                {
                  id :'salary',
                  title:'Update',
                  type:'item',
                  url:environment.routeadmin+ "/salary/options",
                  classes:'nav-item',
                },
              ]
            },
            {
              id:'labourcontract',
              title:'Labour Contract',
              type:'item',
              url:environment.routeadmin+ '/labourcontract',
              classes :'nav-item',
              icon :'bi bi-clipboard',
              children :[
                {
                  id :'labourcontract',
                  title:'Labour Options',
                  type:'item',
                  url:environment.routeadmin+ "/labourcontract/options",
                  classes:'nav-item',
                },
              ]
            },
          ]
        },

        {
          id:'workhour',
          title:'Work Hour',
          type:'collapse',
          url:environment.routeadmin+ '/workhour',
          classes :'nav-item',
          icon :'bi bi-stopwatch',
          children:[
            {
              id:'workhour',
              title:'Hours',
              type:'item',
              url:environment.routeadmin+ '/workhour',
              classes :'nav-item',
              icon :'bi bi-clock',
              children:[
                {
                  id :'workhour',
                  title:'ADD OR EDIT',
                  type:'item',
                  url:environment.routeadmin+ "/workhour/addoredit",
                  classes:'nav-item',
                },
              ]
            },
            {
              id:'workhour',
              title:'Labour Day',
              type:'item',
              url:environment.routeadmin+ '/labourday',
              classes :'nav-item',
              icon :'bi bi-calendar',
            }
          ]
        },
    ]
  },
  {
    id: '4',
    title: 'Statistics',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: '4-2',
        title: 'Work Hour',
        type: 'item',
        classes: 'nav-item',
        url:environment.routeadmin+  '/statistic/workhour',
        icon: 'bi bi-pie-chart',

      },{
        id: '4-1',
        title: 'Salary',
        type: 'item',
        classes: 'nav-item',
        url:environment.routeadmin+  '/statistic/salary',
        icon: 'bi bi-currency-dollar',
      }
    ]
  },




];

@Injectable()
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
