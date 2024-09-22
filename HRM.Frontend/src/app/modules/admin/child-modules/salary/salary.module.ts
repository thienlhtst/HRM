import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryListComponent } from './salary-list/salary-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SalaryService } from 'src/Services/Salary/salary.service';
import { SalaryOptionsComponent } from './salary-options/salary-options.component';
import { FormsModule } from '@angular/forms';
import { RankServiceService } from 'src/Services/Rank/RankService.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ConfirmationDialogService } from 'src/app/modules/share/components/confirmation-dialog/confirmation-dialog.service';
import { PagingnavComponent } from 'src/app/modules/share/components/pagingnav/pagingnav.component';
import { NotificationComponent } from 'src/app/modules/share/components/Notification/Notification.component';
import { PipeSharePipe } from 'src/app/modules/share/components/Pipe/pipe-share.pipe';
import { SpinnerBetaComponent } from 'src/app/modules/share/components/spinner-beta/spinner-beta.component';

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
