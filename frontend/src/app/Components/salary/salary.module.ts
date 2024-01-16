import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryListComponent } from './salary-list/salary-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SalaryService } from 'src/Service/Salary/salary.service';

const route : Routes=[{
  path:'',
  children:[{
    path:'',component:SalaryListComponent
  }]
}]

@NgModule({
  declarations: [
    SalaryListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    HttpClientModule
  ],
  providers : [SalaryService]
})
export class SalaryModule { }
