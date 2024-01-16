import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbComponent } from 'src/app/theme/shared/components/breadcrumb/breadcrumb.component';
import { EmployeeService } from 'src/Services/Employee/employee.service';

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
