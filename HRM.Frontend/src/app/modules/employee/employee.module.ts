import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavEmployeeComponent } from './nav-employee/nav-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeHomeComponent } from './employee-home.component';
import { EmployeeLeftComponent } from './employee-left/employee-left.component';
import { EmployeeContractComponent } from './employee-right/employee-contract/employee-contract.component';
import { EmployeeDashboardComponent } from './employee-right/employee-dashboard/employee-dashboard.component';

import { EmployeeContractModule } from './employee-right/employee-contract/employee-contract.module';
import { FormsModule } from '@angular/forms';
import { EmployeeInforComponent } from './employee-right/employee-infor/employee-infor.component';
import { EmployeeManageComponent } from './employee-manage/employee-manage.component';
import { InformationComponent } from '../share/components/information/information.component';
import { ShareModule } from '../share/share.module';


const routes: Routes = [
  { 
    path:'', component: EmployeeHomeComponent,
    children:[
      {
        path : 'infor',
        component : EmployeeInforComponent
      },
      {
        path : 'contract',
        loadChildren : () => import('./employee-right/employee-contract/employee-contract.module').then(m=>m.EmployeeContractModule)
      },
      {
        path:'dashboard',
        loadChildren : () => import('./employee-right/employee-dashboard/employee-dashboard.module').then(m=>m.EmployeeDashboardModule)
      },
    ]
  },
   
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShareModule
  ],
  declarations: [NavEmployeeComponent, EmployeeLeftComponent, EmployeeHomeComponent,EmployeeManageComponent,EmployeeInforComponent]
})
export class EmployeeModule { }

