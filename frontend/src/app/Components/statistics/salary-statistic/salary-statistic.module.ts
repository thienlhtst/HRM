import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { SalaryStatisticComponent } from './salary-statistic.component';
import { SalaryStatisticListComponent } from './salary-statistic-list/salary-statistic-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SalaryStatisticChartComponent } from './salary-statistic-chart/salary-statistic-chart.component';
import { SalaryStatisticServiceService } from 'src/Services/Statistics/SalaryStatisticService.service';
import { PagingnavComponent } from 'src/app/theme/shared/components/pagingnav/pagingnav.component';
import { SpinnerBetaComponent } from "../../../theme/shared/components/spinner-beta/spinner-beta.component";
const routes : Routes =[
  {
    path : '',
    children:[
      {path: '',component:SalaryStatisticComponent,pathMatch: 'full'},
    
    ]
  }
]
@NgModule({
    declarations: [SalaryStatisticComponent, SalaryStatisticListComponent, SalaryStatisticChartComponent],
    exports: [SalaryStatisticComponent],
    providers: [SalaryStatisticServiceService,DecimalPipe],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgApexchartsModule, NgbNavModule,
        PagingnavComponent,
        SpinnerBetaComponent
    ]
})
export class SalaryStatisticModule { }
