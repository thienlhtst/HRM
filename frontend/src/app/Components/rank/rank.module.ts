/* eslint-disable @typescript-eslint/no-unused-vars */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankListComponent } from './rank-list/rank-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from 'src/app/theme/shared/components/breadcrumb/breadcrumb.component';
import { HttpClientModule } from '@angular/common/http';
import { RankServiceService } from 'src/Services/Rank/RankService.service';
import { RankAddComponent } from './rank-add/rank-add.component';
import { RankUpdateComponent } from './rank-update/rank-update.component';
import { FormsModule } from '@angular/forms';

const route : Routes=[{
  path:'',
  children:[
    {path:'',component:RankListComponent},
    {path:'add',component: RankAddComponent},
    {path:'update/:id',component:RankUpdateComponent}
  ]
}]

@NgModule({
  declarations: [
    RankListComponent,
    RankAddComponent,
    RankUpdateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    BreadcrumbComponent,
    HttpClientModule
  ],
  providers: [RankServiceService]
})
export class RankModule { }
