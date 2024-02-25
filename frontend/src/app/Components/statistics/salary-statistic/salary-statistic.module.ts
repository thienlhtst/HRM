import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryStatisticComponent } from './salary-statistic.component';
import { SalaryStatisticListComponent } from './salary-statistic-list/salary-statistic-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SalaryStatisticChartComponent } from './salary-statistic-chart/salary-statistic-chart.component';
import { SalaryStatisticServiceService } from 'src/Services/Statistics/SalaryStatisticService.service';
import { PagingnavComponent } from 'src/app/theme/shared/components/pagingnav/pagingnav.component';
const routes : Routes =[
  {
    path : '',
    children:[
      {path: '',component:SalaryStatisticComponent,pathMatch: 'full'},
    
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgApexchartsModule,NgbNavModule,
    PagingnavComponent
  ],
  declarations:[SalaryStatisticComponent,SalaryStatisticListComponent,SalaryStatisticChartComponent],
  exports:[SalaryStatisticComponent],
  providers:[SalaryStatisticServiceService]
})
export class SalaryStatisticModule { }
