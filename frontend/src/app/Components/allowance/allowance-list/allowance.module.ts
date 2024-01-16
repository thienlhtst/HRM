import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllowanceListComponent } from './allowance-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from "../../../theme/shared/components/breadcrumb/breadcrumb.component";
import { AllowanceServiceService } from 'src/Service/Allowance/AllowanceService.service';
import { HttpClientModule } from '@angular/common/http';


const routes : Routes =[
  {
    path : '',
    children:[
      {path: '',component:AllowanceListComponent}
    ]
  }
]


@NgModule({
    declarations: [
        AllowanceListComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        BreadcrumbComponent,
        HttpClientModule,

    ],
    providers: [AllowanceServiceService]
})
export class AllowanceModule { }
