import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllowanceListComponent } from './allowance-list/allowance-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AllowanceServiceService } from 'src/Services/Allowance/AllowanceService.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AllowanceOptionsComponent } from './allowance-options/allowance-options.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RegexService } from 'src/Services/Regex/regex.service';
import { ConfirmationDialogService } from 'src/app/modules/share/components/confirmation-dialog/confirmation-dialog.service';
import { PagingnavComponent } from 'src/app/modules/share/components/pagingnav/pagingnav.component';
import { NotificationComponent } from 'src/app/modules/share/components/Notification/Notification.component';
import { PipeSharePipe } from 'src/app/modules/share/components/Pipe/pipe-share.pipe';
import { SpinnerBetaComponent } from 'src/app/modules/share/components/spinner-beta/spinner-beta.component';
import { AlertComponent } from 'src/app/modules/share/components/alert/alert.component';
import { ShareModule } from 'src/app/modules/share/share.module';
import { AllowanceRulesComponent } from './allowance-rules/allowance-rules.component';


const routes : Routes =[
  {
    path : '',
    children:[
      {path: '',component:AllowanceListComponent},
      {path:'options/:id',component:AllowanceOptionsComponent}
    ]
  }
]


@NgModule({
    declarations: [
        AllowanceListComponent,
        AllowanceOptionsComponent,
        AllowanceRulesComponent
    ],
    providers: [AllowanceServiceService,RegexService,ConfirmationDialogService],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HttpClientModule, PagingnavComponent, NotificationComponent,
        FormsModule,
        PipeSharePipe,
        SpinnerBetaComponent,
        MatTooltipModule,
        AlertComponent,ShareModule
    ]
})
export class AllowanceModule { }
