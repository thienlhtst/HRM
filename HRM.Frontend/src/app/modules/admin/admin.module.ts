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
