import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllowanceListComponent } from './allowance-list/allowance-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from "../../theme/shared/components/breadcrumb/breadcrumb.component";
import { AllowanceServiceService } from 'src/Services/Allowance/AllowanceService.service';
import { HttpClientModule } from '@angular/common/http';
import { PagingnavComponent } from 'src/app/theme/shared/components/pagingnav/pagingnav.component';
import { NotificationComponent } from 'src/app/theme/shared/components/Notification/Notification.component';
import { FormsModule } from '@angular/forms';
import { PipeSharePipe } from 'src/app/theme/shared/components/Pipe/pipe-share.pipe';
import { SpinnerBetaComponent } from 'src/app/theme/shared/components/spinner-beta/spinner-beta.component';
import { SharedModule } from "../../theme/shared/shared.module";
import { AllowanceRulesComponent } from './allowance-rules/allowance-rules.component';
import { AllowanceOptionsComponent } from './allowance-options/allowance-options.component';


const routes : Routes =[
  {
    path : '',
    children:[
      {path: '',component:AllowanceListComponent},
      {path:'update/:id',component:AllowanceOptionsComponent}
    ]
  }
]


@NgModule({
    declarations: [
        AllowanceListComponent,
        AllowanceOptionsComponent,
        AllowanceRulesComponent,

    ],
    providers: [AllowanceServiceService],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        BreadcrumbComponent,
        HttpClientModule, PagingnavComponent, NotificationComponent,
        FormsModule,
        PipeSharePipe,
        SpinnerBetaComponent,
        SharedModule
    ]
})
export class AllowanceModule { }
