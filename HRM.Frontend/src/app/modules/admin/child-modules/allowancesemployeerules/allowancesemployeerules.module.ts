/* eslint-disable @typescript-eslint/no-unused-vars */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllowancesemployeerulesListComponent } from './allowancesemployeerules-list/allowancesemployeerules-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AllowancesAndEmployeeRulesService } from 'src/Services/AllowancesAndEmployeeRules/allowances-and-employee-rules.service';
import { AllowanceServiceService } from 'src/Services/Allowance/AllowanceService.service';
import { AllowanceRulesComponent } from '../allowance/allowance-rules/allowance-rules.component';
import { PagingnavComponent } from 'src/app/modules/share/components/pagingnav/pagingnav.component';
import { NotificationComponent } from 'src/app/modules/share/components/Notification/Notification.component';
import { PipeSharePipe } from 'src/app/modules/share/components/Pipe/pipe-share.pipe';
import { SpinnerBetaComponent } from 'src/app/modules/share/components/spinner-beta/spinner-beta.component';
import { ConfirmationDialogService } from 'src/app/modules/share/components/confirmation-dialog/confirmation-dialog.service';

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
        MatTooltipModule,
  ],
  providers:[AllowanceServiceService,ConfirmationDialogService]
})
export class AllowancesemployeerulesModule { }
