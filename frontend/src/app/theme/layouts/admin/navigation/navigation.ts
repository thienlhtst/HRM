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
        id: 'default',
        title: 'Default',
        type: 'item',
        classes: 'nav-item',
        url: '/dashboard/default',
        icon: 'ti ti-dashboard',
        breadcrumbs: false

      },{
        id: 'home',
        title: 'Home',
        type: 'item',
        classes: 'nav-item',
        url: '/home',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
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
          type:'item',
          url:"/allowance",
          classes:'nav-item',
          icon:'',
          children :[
            {
              id :'allowance',
              title:'Add',
              type:'item',
              url:"/allowance/add",
              classes:'nav-item',
            },
            {
              id :'allowance',
              title:'Update',
              type:'item',
              url:"/allowance/update",
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
          icon:'',
          children :[
            {
              id :'position',
              title:'Add',
              type:'item',
              url:"/position/add",
              classes:'nav-item',
            },
            {
              id :'position',
              title:'Update',
              type:'item',
              url:"/position/update",
              classes:'nav-item',
            },
          ]
        },
        {
          id:'employee',
          title:'Employee ',
          type:'item',
          url:'/employee',
          classes:'nav-item',
          icon:'',
          children :[
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
          id:'rank',
          title:'Rank',
          type:'item',
          url:'/rank',
          classes:'nav-item',
          icon:'',
          children :[
            {
              id :'rank',
              title:'Add',
              type:'item',
              url:"/rank/add",
              classes:'nav-item',
            },
            {
              id :'rank',
              title:'Update',
              type:'item',
              url:"/rank/update",
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
          icon :'',
          children :[
            {
              id :'salary',
              title:'Add',
              type:'item',
              url:"/salary/add",
              classes:'nav-item',
            },
            {
              id :'salary',
              title:'Update',
              type:'item',
              url:"/salary/update",
              classes:'nav-item',
            },
          ]
        },
        {
          id:'workhour',
          title:'Work Hour',
          type:'collapse',
          url:'/workhour',
          classes :'nav-item',
          icon :'',
          children:[
            {
              id:'workhour',
              title:'Hours',
              type:'item',
              url:'/workhour',
              classes :'nav-item',
              icon :'',
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
              icon :'',
            }
          ]
        },
        
        {
          id:'ewa',
          title:'Employee With Allowance',
          type:'item',
          url:'/ewa',
          classes:'nav-item',
          icon:'',
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
