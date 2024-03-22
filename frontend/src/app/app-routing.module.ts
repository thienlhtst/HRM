/* eslint-disable @typescript-eslint/no-unused-vars */
// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project import
import { AdminComponent } from './theme/layouts/admin/admin.component';
import { GuestComponent } from './theme/layouts/guest/guest.component';
import { guestGuard } from './demo/authentication/guards/guest.guard';
import { authGuard } from './demo/authentication/guards/auth.guard';
import QrcodeComponent from './demo/authentication/qrcode/qrcode.component';
import { employeeGuard } from './demo/authentication/guards/employee-guard.service';
import { EmployeeComponent } from './theme/layouts/employee/employee.component';
import path from 'path';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: '/dashboard/default',

        pathMatch: 'full'
      },
      {
        path: 'dashboard/default',
        loadComponent: () => import('./demo/default/dashboard/dashboard.component')
      },
      {
        path: 'home',
        loadChildren : () => import('./Components/home/home.module').then(m=>m.HomeModule)
      },
      {
        path:'allowance',
        loadChildren : () => import('./Components/allowance/allowance.module').then(m=>m.AllowanceModule)
      },
      {
        path:'employee',
        loadChildren:() => import('./Components/employee/employee.module').then(m=>m.EmployeeModule)
      },
      {
        path:'position',
        loadChildren:() => import('./Components/position/position.module').then(m=>m.PositionModule)
      },
      {
        path:'rank',
        loadChildren:() => import('./Components/rank/rank.module').then(m=>m.RankModule)
      },
      {
        path:'salary',
        loadChildren:() => import ('./Components/salary/salary.module').then(m=>m.SalaryModule)
      },
      {
        path:'workhour',
        loadChildren:() => import ('./Components/workhour/workhour.module').then(m=>m.WorkhourModule)
      },
      {
        path:'labourday',
        loadChildren:() => import ('./Components/labourday/labourday.module').then(m=>m.LabourdayModule)
      },
      {
        path:'ewa',
        loadChildren:() => import ('./Components/employeewithallowance/ewa.module').then(m=>m.EwaModule)
      },
      {
        path:'statistic',
        loadChildren:() => import ('./Components/statistics/statistics.module').then(m=>m.StatisticsModule)
      },
      {
        path:'labourcontract',
        loadChildren:() => import ('./Components/labourcontract/labourcontract.module').then(m=>m.LabourcontractModule)
      }


    ]
  },
  {
    path: '',
    component: GuestComponent,
    canActivate: [guestGuard],
    children: [
      {
        path: 'login',
        loadComponent: () => import('./demo/authentication/login/login.component')
      },
      {
        path: 'register',
        loadComponent: () => import('./demo/authentication/register/register.component')
      },


    ]
  },
  {
    path:'',
    component:EmployeeComponent,
    canActivate: [employeeGuard],
    children :[
      
    ]
  },
  {
    path:'qrcode',component:QrcodeComponent

  },
  {
    path: "**",
    component: GuestComponent,
    canActivate: [guestGuard],
    children: [
      {
        path: 'login',
        loadComponent: () => import('./demo/authentication/login/login.component')
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
