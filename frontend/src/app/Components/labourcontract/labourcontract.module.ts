
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { LabourcontractListComponent } from './labourcontract-list/labourcontract-list.component';
import { LabourcontractOptionsComponent } from './labourcontract-options/labourcontract-options.component';
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
import { LabourContractServiceService } from 'src/Services/LabourContract/labour-contract-service.service';
import { RegexService } from 'src/Services/Regex/regex.service';
import { ConfirmationDialogService } from 'src/app/theme/shared/components/confirmation-dialog/confirmation-dialog.service';

const routes : Routes =[
  {
    path : '',
    children:[
      {path: '',component:LabourcontractListComponent},
      {path:'options/:id',component:LabourcontractOptionsComponent}
    ]
  }
]

@NgModule({
  declarations: [LabourcontractListComponent,LabourcontractOptionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BreadcrumbComponent,
    HttpClientModule, PagingnavComponent, NotificationComponent,
    FormsModule,
    PipeSharePipe,
    SpinnerBetaComponent,
    SharedModule,MatTooltipModule
],
providers :[LabourContractServiceService,RegexService,ConfirmationDialogService,DatePipe]
})
export class LabourcontractModule { }
