/* eslint-disable @typescript-eslint/no-unused-vars */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllowancesemployeerulesListComponent } from './allowancesemployeerules-list/allowancesemployeerules-list.component';
import { RouterModule, Routes } from '@angular/router';
import BreadcrumbComponent from 'src/app/demo/component/breadcrumb/breadcrumb.component';
import { HttpClientModule } from '@angular/common/http';
import { PagingnavComponent } from 'src/app/theme/shared/components/pagingnav/pagingnav.component';
import { NotificationComponent } from 'src/app/theme/shared/components/Notification/Notification.component';
import { FormsModule } from '@angular/forms';
import { PipeSharePipe } from 'src/app/theme/shared/components/Pipe/pipe-share.pipe';
import { SpinnerBetaComponent } from 'src/app/theme/shared/components/spinner-beta/spinner-beta.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AllowancesAndEmployeeRulesService } from 'src/Services/AllowancesAndEmployeeRules/allowances-and-employee-rules.service';
import { AllowanceServiceService } from 'src/Services/Allowance/AllowanceService.service';
import { AllowancesemployeerulesAddComponent } from './allowancesemployeerules-add/allowancesemployeerules-add.component';

const routes : Routes =[
  {
    path : '',
    children:[
      {path: '',component:AllowancesemployeerulesListComponent},
      {path:'add',component: AllowancesemployeerulesAddComponent}
    ]
  }
]

@NgModule({
  declarations: [
    AllowancesemployeerulesListComponent,
    AllowancesemployeerulesAddComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
        BreadcrumbComponent,
        HttpClientModule, PagingnavComponent, NotificationComponent,
        FormsModule,
        PipeSharePipe,
        SpinnerBetaComponent,
        SharedModule,
        MatTooltipModule,
  ],
  providers:[AllowanceServiceService ]
})
export class AllowancesemployeerulesModule { }
