import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { PagingnavComponent } from '../../../shared/components/pagingnav/pagingnav.component';
import { NotificationComponent } from '../../../shared/components/Notification/Notification.component';
import { FormsModule } from '@angular/forms';
import { PipeSharePipe } from "../../../shared/components/Pipe/pipe-share.pipe";
import { SpinnerBetaComponent } from '../../../shared/components/spinner-beta/spinner-beta.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ConfirmationDialogService } from '../../../shared/components/confirmation-dialog/confirmation-dialog.service';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const route : Routes = [
  {
    path :'',
    children :[
      {path:'',component:EmployeeListComponent},
      {path:'add',component:EmployeeAddComponent},
      {path:'update/:id',component:EmployeeUpdateComponent},
      {path:'details/:id',component:EmployeeDetailsComponent}
    ]
  }
]

@NgModule({
    declarations: [
        EmployeeListComponent,
        EmployeeAddComponent,
        EmployeeUpdateComponent,
        EmployeeDetailsComponent,
    ],
    providers: [EmployeeService,ConfirmationDialogService],
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
        MatTooltipModule,

    ]
})
export class EmployeeModule { }
