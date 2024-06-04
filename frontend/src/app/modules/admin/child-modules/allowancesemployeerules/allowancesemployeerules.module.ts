/* eslint-disable @typescript-eslint/no-unused-vars */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllowancesemployeerulesListComponent } from './allowancesemployeerules-list/allowancesemployeerules-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PagingnavComponent } from '../../../shared/components/pagingnav/pagingnav.component';
import { NotificationComponent } from '../../../shared/components/Notification/Notification.component';
import { FormsModule } from '@angular/forms';
import { PipeSharePipe } from '../../../shared/components/Pipe/pipe-share.pipe';
import { SpinnerBetaComponent } from '../../../shared/components/spinner-beta/spinner-beta.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AllowancesAndEmployeeRulesService } from 'src/Services/AllowancesAndEmployeeRules/allowances-and-employee-rules.service';
import { AllowanceServiceService } from 'src/Services/Allowance/AllowanceService.service';

import { ConfirmationDialogService } from '../../../shared/components/confirmation-dialog/confirmation-dialog.service';
import { AllowanceRulesComponent } from '../allowance/allowance-rules/allowance-rules.component';

const routes : Routes =[
  {
    path : '',
    children:[
      {path: '',component:AllowancesemployeerulesListComponent},

    ]
  }
]

@NgModule({
  declarations: [
    AllowancesemployeerulesListComponent,
    AllowanceRulesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
        
        HttpClientModule, PagingnavComponent, NotificationComponent,
        FormsModule,
        PipeSharePipe,
        SpinnerBetaComponent,
        SharedModule,
        MatTooltipModule,
  ],
  providers:[AllowanceServiceService,ConfirmationDialogService]
})
export class AllowancesemployeerulesModule { }
