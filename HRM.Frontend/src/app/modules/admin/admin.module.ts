import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';

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
    RouterModule.forChild(routes)


  ],
  declarations: [HomeComponent, NavAdminComponent, HeaderAdminComponent]
})
export class AdminModule { }
