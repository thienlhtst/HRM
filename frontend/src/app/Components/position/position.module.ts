import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionListComponent } from './position-list/position-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from 'src/app/theme/shared/components/breadcrumb/breadcrumb.component';
import { HttpClientModule } from '@angular/common/http';
import { PositionServiceService } from 'src/Services/Position/PositionService.service';


const route : Routes =[{
  path:'',
  children:[
    {path:'',component:PositionListComponent}
  ]
}]

@NgModule({
  declarations: [
    PositionListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    BreadcrumbComponent,
    HttpClientModule
  ],
  providers: [PositionServiceService]
})
export class PositionModule { }
