import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryStatisticModule } from './salary-statistic/salary-statistic.module';
import { WorkhourStatisticModule } from './workhour-statistic/workhour-statistic.module';
import { RouterModule, Routes } from '@angular/router';
import { WorkhourStatisticsServiceService } from 'src/Services/Statistics/WorkhourStatisticsService.service';
import { SalaryStatisticServiceService } from 'src/Services/Statistics/SalaryStatisticService.service';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from 'src/app/modules/share/components/date-picker/date-picker.component';
import { PagingnavComponent } from 'src/app/modules/share/components/pagingnav/pagingnav.component';
import { FormsModule } from '@angular/forms';
import { SpinnerBetaComponent } from 'src/app/modules/share/components/spinner-beta/spinner-beta.component';
import { PipeSharePipe } from 'src/app/modules/share/components/Pipe/pipe-share.pipe';
import { StatisticComponent } from './statistic.component';
import { WorkhourListStatistic1Component } from './workhour-statistic/workhour-list-statistic/workhour-list-statistic.component';

const routes : Routes =[
  {
    path : 'workhour',
    component:WorkhourListStatistic1Component,
    
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgApexchartsModule, NgbNavModule,
    DatePickerComponent,
    PagingnavComponent,
    FormsModule,
    SpinnerBetaComponent,
    PipeSharePipe,
     WorkhourStatisticModule
  ],
  declarations: [StatisticComponent],
})
export class StatisticsModule { }
