import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankListComponent } from './rank-list/rank-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from 'src/app/theme/shared/components/breadcrumb/breadcrumb.component';
import { HttpClientModule } from '@angular/common/http';
import { RankServiceService } from 'src/Service/Rank/RankService.service';


const route : Routes=[{
  path:'',
  children:[
    {path:'',component:RankListComponent}
  ]
}]

@NgModule({
  declarations: [
    RankListComponent
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
