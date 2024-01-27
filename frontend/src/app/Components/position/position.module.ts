/* eslint-disable @typescript-eslint/no-unused-vars */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionListComponent } from './position-list/position-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from 'src/app/theme/shared/components/breadcrumb/breadcrumb.component';
import { HttpClientModule } from '@angular/common/http';
import { PositionServiceService } from 'src/Services/Position/PositionService.service';
import { PositionAddComponent } from './position-add/position-add.component';
import { PositionUpdateComponent } from './position-update/position-update.component';
import { FormsModule } from '@angular/forms';


const route : Routes =[{
  path:'',
  children:[
    {path:'',component:PositionListComponent},
    {path:'add',component:PositionAddComponent},
    {path:'update/:id',component:PositionUpdateComponent}
  ]
}]

@NgModule({
  declarations: [
    PositionListComponent,
    PositionAddComponent,
    PositionUpdateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    BreadcrumbComponent,
    HttpClientModule,
    FormsModule
  ],
  providers: [PositionServiceService]
})
export class PositionModule { }
