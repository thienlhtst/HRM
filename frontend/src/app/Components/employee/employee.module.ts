import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbComponent } from 'src/app/theme/shared/components/breadcrumb/breadcrumb.component';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';

const route : Routes = [
  {
    path :'',
    children :[
      {path:'',component:EmployeeListComponent}
    ]
  }
]

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeUpdateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    BreadcrumbComponent,
    HttpClientModule,
  ],
  providers:[EmployeeService]
})
export class EmployeeModule { }
