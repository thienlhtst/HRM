import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabourdayComponent } from './labourday.component';
import { RouterModule, Routes } from '@angular/router';
import BreadcrumbComponent from 'src/app/demo/component/breadcrumb/breadcrumb.component';
import { HttpClientModule } from '@angular/common/http';
import { PagingnavComponent } from 'src/app/theme/shared/components/pagingnav/pagingnav.component';
import { NotificationComponent } from 'src/app/theme/shared/components/Notification/Notification.component';
import { FormsModule } from '@angular/forms';
import { PipeSharePipe } from 'src/app/theme/shared/components/Pipe/pipe-share.pipe';
import { SpinnerBetaComponent } from 'src/app/theme/shared/components/spinner-beta/spinner-beta.component';
import { LabourdayListComponent } from './labourday-list/labourday-list.component';

const route : Routes = [
  {
    path :'',
    children :[
      {path:'',component:LabourdayComponent},
    
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    BreadcrumbComponent,
    HttpClientModule,
    PagingnavComponent,
    NotificationComponent,
    FormsModule,
    PipeSharePipe,
    SpinnerBetaComponent
  ],
  declarations: [LabourdayComponent,LabourdayListComponent]
})
export class LabourdayModule { }
