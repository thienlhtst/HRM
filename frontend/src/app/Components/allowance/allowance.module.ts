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


const routes : Routes =[
  {
    path : '',
    children:[
      {path: '',component:AllowanceListComponent},
      {path:'add',component:AllowanceAddComponent}
    ]
  }
]


@NgModule({
    declarations: [
        AllowanceListComponent,
        AllowanceAddComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        BreadcrumbComponent,
        HttpClientModule,PagingnavComponent,NotificationComponent

    ],
    providers: [AllowanceServiceService]
})
export class AllowanceModule { }
