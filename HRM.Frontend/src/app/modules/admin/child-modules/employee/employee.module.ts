import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { FormsModule } from '@angular/forms';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ConfirmationDialogService } from 'src/app/modules/share/components/confirmation-dialog/confirmation-dialog.service';
import { PagingnavComponent } from 'src/app/modules/share/components/pagingnav/pagingnav.component';
import { NotificationComponent } from 'src/app/modules/share/components/Notification/Notification.component';
import { PipeSharePipe } from 'src/app/modules/share/components/Pipe/pipe-share.pipe';
import { SpinnerBetaComponent } from 'src/app/modules/share/components/spinner-beta/spinner-beta.component';
import { MatTooltipModule } from '@angular/material/tooltip'; // Add this line
import { ShareModule } from 'src/app/modules/share/share.module';
import { SystemService } from 'src/Services/System/System.service';

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
    providers: [EmployeeService,ConfirmationDialogService,SystemService],
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        ShareModule,
        PagingnavComponent,
        NotificationComponent,
        FormsModule,
        PipeSharePipe,
        SpinnerBetaComponent,
        MatTooltipModule,

    ]
})
export class EmployeeModule { }
