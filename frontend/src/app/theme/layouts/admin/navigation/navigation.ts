import { Injectable } from '@angular/core';

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
          url:"/allowance",
          classes:'nav-item',
          icon:'bi bi-cash-coin',
          children :[
            {
              id:'allowance1',
              title:'Allowance List',
              type:'item',
              url:'/allowance',
              classes:'nav-item',
              icon:'bi bi-currency-dollar',
              children:[
                {
                  id :'allowance2',
                  title:'Update',
                  type:'item',
                  url:"/allowance/options",
                  classes:'nav-item',
                },
              ]
            },
            {
              id:'allowance3',
              title:'Employee With Allowance',
              type:'item',
              url:'/ewa',
              classes:'nav-item',
              icon:'bi bi-people',
              children:[
                {
                  id :'ewa',
                  title:'Auto',
                  type:'item',
                  url:"/ewa/add",
                  classes:'nav-item',
                },
              ]
            },
          ]
        },
        {
          id:'employee',
          title:'Employee ',
          type:'collapse',
          url:'/employee',
          classes:'nav-item',
          icon:'bi bi-person',
          children :[
            {
              id:'employee',
              title:'Employee List',
              type:'item',
              url:'/employee',
              classes:'nav-item',
              icon:'bi bi-file-person',
              children:[
                {
                  id :'employee',
                  title:'Add',
                  type:'item',
                  url:"/employee/add",
                  classes:'nav-item',
                },
                {
                  id :'employee',
                  title:'Update',
                  type:'item',
                  url:"/employee/update",
                  classes:'nav-item',
                },
              ]
            },
            {
              id:'position',
              title:'Position',
              type:'item',
              url:'/position',
              classes:'nav-item',
              icon:'bi bi-briefcase',
              children :[
                {
                  id :'position',
                  title:'Update',
                  type:'item',
                  url:"/position/options",
                  classes:'nav-item',
                },
              ]
            },
            {
              id:'rank',
              title:'Rank',
              type:'item',
              url:'/rank',
              classes:'nav-item',
              icon:'bi bi-card-checklist',
              children :[
                {
                  id :'rank',
                  title:'Update',
                  type:'item',
                  url:"/rank/options",
                  classes:'nav-item',
                },
              ]
            },
            {
              id:'salary',
              title:'Salary',
              type:'item',
              url:'/salary',
              classes :'nav-item',
              icon :'bi bi-receipt',
              children :[
                {
                  id :'salary',
                  title:'Update',
                  type:'item',
                  url:"/salary/options",
                  classes:'nav-item',
                },
              ]
            },
            {
              id:'labourcontract',
              title:'Labour Contract',
              type:'item',
              url:'/labourcontract',
              classes :'nav-item',
              icon :'bi bi-clipboard',
              children :[
                {
                  id :'labourcontract',
                  title:'Labour Options',
                  type:'item',
                  url:"/labourcontract/options",
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
          url:'/workhour',
          classes :'nav-item',
          icon :'bi bi-stopwatch',
          children:[
            {
              id:'workhour',
              title:'Hours',
              type:'item',
              url:'/workhour',
              classes :'nav-item',
              icon :'bi bi-clock',
              children:[
                {
                  id :'workhour',
                  title:'ADD OR EDIT',
                  type:'item',
                  url:"/workhour/addoredit",
                  classes:'nav-item',
                },
              ]
            },
            {
              id:'workhour',
              title:'Labour Day',
              type:'item',
              url:'/labourday',
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
        url: '/statistic/workhour',
        icon: 'bi bi-pie-chart',

      },{
        id: '4-1',
        title: 'Salary',
        type: 'item',
        classes: 'nav-item',
        url: '/statistic/salary',
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
