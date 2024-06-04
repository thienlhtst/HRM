import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabourdayComponent } from './labourday.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PagingnavComponent } from '../../../shared/components/pagingnav/pagingnav.component';
import { NotificationComponent } from '../../../shared/components/Notification/Notification.component';
import { FormsModule } from '@angular/forms';
import { PipeSharePipe } from '../../../shared/components/Pipe/pipe-share.pipe';
import { SpinnerBetaComponent } from '../../../shared/components/spinner-beta/spinner-beta.component';
import { LabourdayListComponent } from './labourday-list/labourday-list.component';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { LabourdayAddoreditComponent } from './labourday-addoredit/labourday-addoredit.component';
import { LabourhourAddoreditComponent } from './labourhour-addoredit/labourhour-addoredit.component';
import { LabourHourService } from 'src/Services/LabourHour/LabourHour.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ConfirmationDialogService } from '../../../shared/components/confirmation-dialog/confirmation-dialog.service';

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
    HttpClientModule,
    PagingnavComponent,
    NotificationComponent,
    FormsModule,
    PipeSharePipe,
    SpinnerBetaComponent,
    MdbRippleModule,
    MatTooltipModule
  ],
   providers:[LabourHourService,ConfirmationDialogService],
  declarations: [LabourdayComponent,LabourdayListComponent,LabourdayAddoreditComponent,LabourhourAddoreditComponent]
})
export class LabourdayModule { }
