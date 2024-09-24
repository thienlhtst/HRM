import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ShareModule } from 'src/app/modules/share/share.module';
import { SpinnerBetaComponent } from "../../../share/components/spinner-beta/spinner-beta.component";
import { PagingnavComponent } from "../../../share/components/pagingnav/pagingnav.component";
import { DashboardListDetailsComponent } from './dashboard-list-details/dashboard-list-details.component';
import { DashboardListEmployeesComponent } from './dashboard-list-employees/dashboard-list-employees.component';
import { HomeService } from 'src/Services/Home/homeService.service';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { SystemService } from 'src/Services/System/System.service';
const routes: Routes = [
  {
    path:'',
    children:[
      {path: '',component:DashboardComponent,pathMatch: 'full'},
      { path:'page/:pagenumber',component: DashboardListDetailsComponent}
    ]
  },
  
   
  
 
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShareModule,
    SpinnerBetaComponent,
    PagingnavComponent
],
providers: [HomeService,EmployeeService,SystemService],
  declarations: [DashboardComponent,DashboardListDetailsComponent,DashboardListEmployeesComponent]
})
export class DashboardModule { }
