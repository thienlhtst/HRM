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
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { LabourdayAddoreditComponent } from './labourday-addoredit/labourday-addoredit.component';
import { LabourhourAddoreditComponent } from './labourhour-addoredit/labourhour-addoredit.component';
import { LabourHourService } from 'src/Services/LabourHour/LabourHour.service';

const route : Routes = [
  {
    path :'',
    children :[
      {path:'',component:LabourdayComponent},
      {path:':id',component:LabourdayComponent},
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
    SpinnerBetaComponent,
    MdbRippleModule
  ],
   providers:[LabourHourService],
  declarations: [LabourdayComponent,LabourdayListComponent,LabourdayAddoreditComponent,LabourhourAddoreditComponent]
})
export class LabourdayModule { }
