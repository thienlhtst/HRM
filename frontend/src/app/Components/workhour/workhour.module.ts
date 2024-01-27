import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkhourListComponent } from './workhour-list/workhour-list.component';
import { RouterModule, Routes } from '@angular/router';
import { WorkHourService } from 'src/Services/WorkHour/WorkHour.service';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbComponent } from 'src/app/theme/shared/components/breadcrumb/breadcrumb.component';
import { PagingnavComponent } from "../../theme/shared/components/pagingnav/pagingnav.component";
import { WorkhourListDetailComponent } from './workhour-list-detail/workhour-list-detail.component';

const route : Routes=[
  {
    path:'',
    children:[
      {path:'',component:WorkhourListComponent}
    ]
  }
]

@NgModule({
    declarations: [
        WorkhourListComponent,
        WorkhourListDetailComponent
    ],
    providers: [WorkHourService],
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        BreadcrumbComponent,
        HttpClientModule,
        PagingnavComponent
    ]
})
export class WorkhourModule { }
