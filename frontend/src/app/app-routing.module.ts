/* eslint-disable @typescript-eslint/no-unused-vars */
// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project import
import { AdminComponent } from './theme/layouts/admin/admin.component';
import { GuestComponent } from './theme/layouts/guest/guest.component';
import { guestGuard } from './demo/authentication/guards/guest.guard';
import { authGuard } from './demo/authentication/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    //canActivate: [authGuard],
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
        path: 'typography',
        loadComponent: () => import('./demo/ui-component/typography/typography.component')
      },
      {
        path: 'card',
        loadComponent: () => import('./demo/component/card/card.component')
      },
      {
        path: 'breadcrumb',
        loadComponent: () => import('./demo/component/breadcrumb/breadcrumb.component')
      },
      {
        path: 'spinner',
        loadComponent: () => import('./demo/component/spinner/spinner.component')
      },
      {
        path: 'color',
        loadComponent: () => import('./demo/ui-component/ui-color/ui-color.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/other/sample-page/sample-page.component')
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
      }


    ]
  },
  {
    path: '',
    component: GuestComponent,
    //canActivate: [guestGuard],
    children: [
      {
        path: 'login',
        loadComponent: () => import('./demo/authentication/login/login.component')
      },
      {
        path: 'register',
        loadComponent: () => import('./demo/authentication/register/register.component')
      },
      {
        path:'qrcode',
        loadComponent: () => import('./demo/authentication/qrcode/qrcode.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
