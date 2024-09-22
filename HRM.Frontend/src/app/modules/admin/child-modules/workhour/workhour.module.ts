import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkhourListComponent } from './workhour-list/workhour-list.component';
import { RouterModule, Routes } from '@angular/router';
import { WorkHourService } from 'src/Services/WorkHour/WorkHour.service';
import { HttpClientModule } from '@angular/common/http';
import { WorkhourListDetailComponent } from './workhour-list-detail/workhour-list-detail.component';
import { FormsModule } from '@angular/forms';
import { WorkhourAddoreditComponent } from './workhour-addoredit/workhour-addoredit.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NotificationService } from 'src/Services/Shared/Notification.service';
import { ConfirmationDialogService } from 'src/app/modules/share/components/confirmation-dialog/confirmation-dialog.service';
import { PagingnavComponent } from 'src/app/modules/share/components/pagingnav/pagingnav.component';
import { DatePickerComponent } from 'src/app/modules/share/components/date-picker/date-picker.component';
import { NotificationComponent } from 'src/app/modules/share/components/Notification/Notification.component';
import { SpinnerBetaComponent } from 'src/app/modules/share/components/spinner-beta/spinner-beta.component';

const route : Routes=[
  {
    path:'',
    children:[
      {path:'',component:WorkhourListComponent},
      {path:'addoredit',component:WorkhourAddoreditComponent},
      {path:'addoredit/:id',component:WorkhourAddoreditComponent},
    ]
  }
]

@NgModule({
    declarations: [
        WorkhourListComponent,
        WorkhourListDetailComponent,
        WorkhourAddoreditComponent
    ],
    providers: [WorkHourService, ConfirmationDialogService, NotificationService],
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        HttpClientModule, FormsModule,
        PagingnavComponent,
        DatePickerComponent,
        NotificationComponent, MatTooltipModule,
        SpinnerBetaComponent
    ]
})
export class WorkhourModule { }
