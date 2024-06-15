/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */
// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project import
import { AdminComponent } from './modules/admin/admin.component';
import { GuestComponent } from './modules/guest/guest.component';
import { guestGuard } from './modules/authentication/guards/guest.guard';
import { authGuard } from './modules/authentication/guards/auth.guard';
import QrcodeComponent from './modules/authentication/qrcode/qrcode.component';
import { employeeGuard } from './modules/authentication/guards/employee-guard.service';
import { EmployeeComponent } from './modules/employee/employee.component';
import path from 'path';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [guestGuard],
    children: [
      {
        path: 'admin',
        redirectTo: 'admin/home',

        pathMatch: 'full'
      },

      {
        path: 'home',
        loadChildren : () => import('./modules/admin/child-modules/home/home.module').then(m=>m.HomeModule)
      },
      {
        path:'allowance',
        loadChildren : () => import('./modules/admin/child-modules/allowance/allowance.module').then(m=>m.AllowanceModule)
      },
      {
        path:'employee',
        loadChildren:() => import('./modules/admin/child-modules/employee/employee.module').then(m=>m.EmployeeModule)
      },
      {
        path:'position',
        loadChildren:() => import('./modules/admin/child-modules/position/position.module').then(m=>m.PositionModule)
      },
      {
        path:'rank',
        loadChildren:() => import('./modules/admin/child-modules/rank/rank.module').then(m=>m.RankModule)
      },
      {
        path:'salary',
        loadChildren:() => import ('./modules/admin/child-modules/salary/salary.module').then(m=>m.SalaryModule)
      },
      {
        path:'workhour',
        loadChildren:() => import ('./modules/admin/child-modules/workhour/workhour.module').then(m=>m.WorkhourModule)
      },
      {
        path:'labourday',
        loadChildren:() => import ('./modules/admin/child-modules/labourday/labourday.module').then(m=>m.LabourdayModule)
      },
      {
        path:'ewa',
        loadChildren:() => import ('./modules/admin/child-modules/employeewithallowance/ewa.module').then(m=>m.EwaModule)
      },
      {
        path:'statistic',
        loadChildren:() => import ('./modules/admin/child-modules/statistics/statistics.module').then(m=>m.StatisticsModule)
      },
      {
        path:'labourcontract',
        loadChildren:() => import ('./modules/admin/child-modules/labourcontract/labourcontract.module').then(m=>m.LabourcontractModule)
      },
      {
        path:'allowancesemployeerules',
        loadChildren:() => import ('./modules/admin/child-modules/allowancesemployeerules/allowancesemployeerules.module').then(m=>m.AllowancesemployeerulesModule)
      }



    ]
  },
  {
    path: '',
    component: GuestComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'login',
        loadComponent: () => import('./modules/authentication/login/login.component')
      },
      {
        path: 'register',
        loadComponent: () => import('./modules/authentication/register/register.component')
      },


    ]
  },
  {
      path:'',
      component:EmployeeComponent,
      canActivate: [employeeGuard],
      children:
      [
        {
          path : 'profile',
          loadChildren: () => import('./EmployeeComponent/profile/profile.module').then(m=>m.ProfileModule)
        },
        {
          path : 'contract',
          loadChildren: () => import('./EmployeeComponent/Contract/contract.module').then(m=>m.ContractModule)
        },
{
          path : 'employeeworkhour',
          loadChildren: () => import('./EmployeeComponent/workout/workout.module').then(m=>m.WorkoutModule)
        },
        {
          path:'chat',
          loadChildren:() => import('./EmployeeComponent/chat/chat.module').then(m=>m.ChatModule)
        }
      ]
  },
  {
    path:'qrcode',component:QrcodeComponent

  },
  {
    path: "**",
    component: GuestComponent,
    //canActivate: [guestGuard],
    children: [
      {
        path: 'login',
        loadComponent: () => import('./modules/authentication/login/login.component')
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
