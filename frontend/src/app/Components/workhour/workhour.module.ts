import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkhourListComponent } from './workhour-list/workhour-list.component';
import { RouterModule, Routes } from '@angular/router';
import { WorkHourService } from 'src/Services/WorkHour/WorkHour.service';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbComponent } from 'src/app/theme/shared/components/breadcrumb/breadcrumb.component';
import { PagingnavComponent } from "../../theme/shared/components/pagingnav/pagingnav.component";
import { WorkhourListDetailComponent } from './workhour-list-detail/workhour-list-detail.component';
import { FormsModule } from '@angular/forms';
import { WorkhourAddoreditComponent } from './workhour-addoredit/workhour-addoredit.component';
import { DatePickerComponent } from "../../theme/shared/components/date-picker/date-picker.component";
import { NotificationComponent } from "../../theme/shared/components/Notification/Notification.component";
import { MatTooltipModule } from '@angular/material/tooltip';
import { ConfirmationDialogService } from 'src/app/theme/shared/components/confirmation-dialog/confirmation-dialog.service';
import { NotificationService } from 'src/Services/Shared/Notification.service';
import { SpinnerBetaComponent } from "../../theme/shared/components/spinner-beta/spinner-beta.component";

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
        BreadcrumbComponent,
        HttpClientModule, FormsModule,
        PagingnavComponent,
        DatePickerComponent,
        NotificationComponent, MatTooltipModule,
        SpinnerBetaComponent
    ]
})
export class WorkhourModule { }
