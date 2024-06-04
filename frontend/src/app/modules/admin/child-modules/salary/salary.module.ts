import { NotificationComponent } from './../../../shared/components/Notification/Notification.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryListComponent } from './salary-list/salary-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SalaryService } from 'src/Services/Salary/salary.service';
import { PagingnavComponent } from '../../../shared/components/pagingnav/pagingnav.component';
import { SalaryOptionsComponent } from './salary-options/salary-options.component';
import { FormsModule } from '@angular/forms';
import { RankServiceService } from 'src/Services/Rank/RankService.service';
import { PipeSharePipe } from "../../../shared/components/Pipe/pipe-share.pipe";
import { SpinnerBetaComponent } from '../../../shared/components/spinner-beta/spinner-beta.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ConfirmationDialogService } from '../../../shared/components/confirmation-dialog/confirmation-dialog.service';

const route : Routes=[{
  path:'',
  children:[
    { path:'',component:SalaryListComponent},
    { path:'options',component:SalaryOptionsComponent}


  ]
}]

@NgModule({
    declarations: [
        SalaryListComponent,
        SalaryOptionsComponent,
    ],
    providers: [SalaryService, RankServiceService,ConfirmationDialogService],
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
    ]
})
export class SalaryModule { }
