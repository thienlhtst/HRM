import { NotificationComponent } from './../../theme/shared/components/Notification/Notification.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryListComponent } from './salary-list/salary-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SalaryService } from 'src/Services/Salary/salary.service';
import { PagingnavComponent } from 'src/app/theme/shared/components/pagingnav/pagingnav.component';
import { SalaryOptionsComponent } from './salary-options/salary-options.component';
import { FormsModule } from '@angular/forms';
import { RankServiceService } from 'src/Services/Rank/RankService.service';
import { PipeSharePipe } from "../../theme/shared/components/Pipe/pipe-share.pipe";
import { SpinnerBetaComponent } from 'src/app/theme/shared/components/spinner-beta/spinner-beta.component';
import { MatTooltipModule } from '@angular/material/tooltip';

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
    providers: [SalaryService, RankServiceService],
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
