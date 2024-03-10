import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllowanceListComponent } from './allowance-list/allowance-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from "../../theme/shared/components/breadcrumb/breadcrumb.component";
import { AllowanceServiceService } from 'src/Services/Allowance/AllowanceService.service';
import { HttpClientModule } from '@angular/common/http';
import { AllowanceAddComponent } from './allowance-add/allowance-add.component';
import { PagingnavComponent } from 'src/app/theme/shared/components/pagingnav/pagingnav.component';
import { NotificationComponent } from 'src/app/theme/shared/components/Notification/Notification.component';
import { FormsModule } from '@angular/forms';
import { AllowanceUpdateComponent } from './allowance-update/allowance-update.component';
import { PipeSharePipe } from 'src/app/theme/shared/components/Pipe/pipe-share.pipe';
import { SpinnerBetaComponent } from 'src/app/theme/shared/components/spinner-beta/spinner-beta.component';
import { SharedModule } from "../../theme/shared/shared.module";


const routes : Routes =[
  {
    path : '',
    children:[
      {path: '',component:AllowanceListComponent},
      {path:'add',component:AllowanceAddComponent},
      {path:'update/:id',component:AllowanceUpdateComponent}
    ]
  }
]


@NgModule({
    declarations: [
        AllowanceListComponent,
        AllowanceAddComponent,
        AllowanceUpdateComponent,

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
