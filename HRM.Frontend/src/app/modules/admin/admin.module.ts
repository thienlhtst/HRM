import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { ShareModule } from "../share/share.module";
import { NoficationHeaderComponent } from './header-admin/nofication-header/nofication-header.component';
import { LanguageHeaderComponent } from './header-admin/language-header/language-header.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./child-modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'emp',
        loadChildren: () => import('./child-modules/employee/employee.module').then(m => m.EmployeeModule)
      },
      {
        path:'statistic',
        loadChildren: () => import('./child-modules/statistics/statistics.module').then(m => m.StatisticsModule)
      },
      {
        path:'postion',
        loadChildren:() => import('./child-modules/position/position.module').then(m=>m.PositionModule)
      },
      {
        path:'level',
        loadChildren:() => import('./child-modules/rank/rank.module').then(m=>m.RankModule)
      },
      {
        path:'salary',
        loadChildren:() => import ('./child-modules/salary/salary.module').then(m=>m.SalaryModule)
      },
      {
        path:'workhour',
        loadChildren:() => import ('./child-modules/workhour/workhour.module').then(m=>m.WorkhourModule)
      },
      {
        path:'labourday',
        loadChildren:() => import ('./child-modules/labourday/labourday.module').then(m=>m.LabourdayModule)
      },
      {
        path:'labourcontract',
        loadChildren:() => import ('./child-modules/labourcontract/labourcontract.module').then(m=>m.LabourcontractModule)
      },
      {
        path:'ewa',
        loadChildren:() => import ('./child-modules/employeewithallowance/ewa.module').then(m=>m.EwaModule)
      },
      {
        path:'allowancesemployeerules',
        loadChildren:() => import ('./child-modules/allowancesemployeerules/allowancesemployeerules.module').then(m=>m.AllowancesemployeerulesModule)
      },
      {
        path:'allowance',
        loadChildren : () => import('./child-modules/allowance/allowance.module').then(m=>m.AllowanceModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',

      }
    ]
  }

]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShareModule
],
  declarations: [LanguageHeaderComponent,NoficationHeaderComponent,HomeComponent, NavAdminComponent, HeaderAdminComponent]
})
export class AdminModule { }
