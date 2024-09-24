
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { LabourcontractListComponent } from './labourcontract-list/labourcontract-list.component';
import { LabourcontractOptionsComponent } from './labourcontract-options/labourcontract-options.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LabourContractServiceService } from 'src/Services/LabourContract/labour-contract-service.service';
import { RegexService } from 'src/Services/Regex/regex.service';
import { PagingnavComponent } from 'src/app/modules/share/components/pagingnav/pagingnav.component';
import { NotificationComponent } from 'src/app/modules/share/components/Notification/Notification.component';
import { PipeSharePipe } from 'src/app/modules/share/components/Pipe/pipe-share.pipe';
import { SpinnerBetaComponent } from 'src/app/modules/share/components/spinner-beta/spinner-beta.component';
import { ConfirmationDialogService } from 'src/app/modules/share/components/confirmation-dialog/confirmation-dialog.service';
import { ShareModule } from 'src/app/modules/share/share.module';

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
    HttpClientModule, PagingnavComponent, NotificationComponent,
    FormsModule,
    PipeSharePipe,
    SpinnerBetaComponent,
   MatTooltipModule,ShareModule
],
providers :[LabourContractServiceService,RegexService,ConfirmationDialogService,DatePipe]
})
export class LabourcontractModule { }
