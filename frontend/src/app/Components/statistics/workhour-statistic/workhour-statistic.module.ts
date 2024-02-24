import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkhourListStatisticComponent } from './workhour-list-statistic/workhour-list-statistic.component';
import { RouterModule, Routes } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkhourChartStatisticComponent } from './workhour-chart-statistic/workhour-chart-statistic.component';
import { WorkhourStatisticsServiceService } from 'src/Services/Statistics/WorkhourStatisticsService.service';
import { DatePickerComponent } from 'src/app/theme/shared/components/date-picker/date-picker.component';

const routes : Routes =[
  {
    path : '',
    children:[
      {path: '',component:WorkhourListStatisticComponent,pathMatch: 'full'},
    
    ]
  }
]



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgApexchartsModule,NgbNavModule,
    DatePickerComponent
  ],
  declarations:[WorkhourListStatisticComponent,WorkhourChartStatisticComponent],
  exports:[WorkhourListStatisticComponent],
  providers: [WorkhourStatisticsServiceService]
})
export class WorkhourStatisticModule { }
