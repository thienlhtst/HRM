import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabourdayComponent } from './labourday.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LabourdayListComponent } from './labourday-list/labourday-list.component';
import { LabourdayAddoreditComponent } from './labourday-addoredit/labourday-addoredit.component';
import { LabourhourAddoreditComponent } from './labourhour-addoredit/labourhour-addoredit.component';
import { LabourHourService } from 'src/Services/LabourHour/LabourHour.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SpinnerBetaComponent } from 'src/app/modules/share/components/spinner-beta/spinner-beta.component';
import { PipeSharePipe } from 'src/app/modules/share/components/Pipe/pipe-share.pipe';
import { PagingnavComponent } from 'src/app/modules/share/components/pagingnav/pagingnav.component';
import { NotificationComponent } from 'src/app/modules/share/components/Notification/Notification.component';
import { ConfirmationDialogService } from 'src/app/modules/share/components/confirmation-dialog/confirmation-dialog.service';

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
    MatTooltipModule
  ],
   providers:[LabourHourService,ConfirmationDialogService],
  declarations: [LabourdayComponent,LabourdayListComponent,LabourdayAddoreditComponent,LabourhourAddoreditComponent]
})
export class LabourdayModule { }
