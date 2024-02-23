import { NotificationComponent } from './../../theme/shared/components/Notification/Notification.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryListComponent } from './salary-list/salary-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SalaryService } from 'src/Services/Salary/salary.service';
import { PagingnavComponent } from 'src/app/theme/shared/components/pagingnav/pagingnav.component';
import { SalaryAddComponent } from './salary-add/salary-add.component';
import { SalaryUpdateComponent } from './salary-update/salary-update.component';
import { FormsModule } from '@angular/forms';
import { RankServiceService } from 'src/Services/Rank/RankService.service';
import { PipeSharePipe } from "../../theme/shared/components/Pipe/pipe-share.pipe";
import { SpinnerBetaComponent } from 'src/app/theme/shared/components/spinner-beta/spinner-beta.component';

const route : Routes=[{
  path:'',
  children:[
    { path:'',component:SalaryListComponent},
    { path:'add',component : SalaryAddComponent},
    { path:'update',component:SalaryUpdateComponent}


  ]
}]

@NgModule({
    declarations: [
        SalaryListComponent,
        SalaryAddComponent,
        SalaryUpdateComponent,
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
        SpinnerBetaComponent
    ]
})
export class SalaryModule { }
