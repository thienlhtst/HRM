/* eslint-disable @typescript-eslint/no-unused-vars */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeListComponent } from './home-list/home-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from 'src/app/theme/shared/components/breadcrumb/breadcrumb.component';
import { PagingnavComponent } from "../../theme/shared/components/pagingnav/pagingnav.component";
import { HomeListDetailsComponent } from './home-list-details/home-list-details.component';
import { HomeService } from 'src/Services/Home/homeService.service';
import { HomeListemployeeDetailsComponent } from './home-listemployee-details/home-listemployee-details.component';
import { SpinnerBetaComponent } from "../../theme/shared/components/spinner-beta/spinner-beta.component";
import { EmployeeService } from 'src/Services/Employee/employee.service';

const routes : Routes =[
  {
    path : '',
    children:[
      {path: '',component:HomeListComponent,pathMatch: 'full'},
      { path:'page/:pagenumber',component: HomeListDetailsComponent}
    ]
  }
]


@NgModule({
    declarations: [HomeListComponent, HomeListDetailsComponent, HomeListemployeeDetailsComponent],
    exports: [HomeListComponent],
    providers: [HomeService,EmployeeService],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        PagingnavComponent,
        SpinnerBetaComponent
    ]
})
export class HomeModule { }
