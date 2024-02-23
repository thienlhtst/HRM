/* eslint-disable @typescript-eslint/no-unused-vars */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeListComponent } from './home-list/home-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from 'src/app/theme/shared/components/breadcrumb/breadcrumb.component';
import { PagingnavComponent } from "../../theme/shared/components/pagingnav/pagingnav.component";
import { HomeListDetailsComponent } from './home-list-details/home-list-details.component';

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
    declarations: [HomeListComponent,HomeListDetailsComponent],
    exports: [HomeListComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        PagingnavComponent,
    ]
})
export class HomeModule { }
