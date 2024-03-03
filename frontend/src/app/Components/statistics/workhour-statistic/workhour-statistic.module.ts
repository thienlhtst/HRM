import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { WorkhourListStatisticComponent } from './workhour-list-statistic/workhour-list-statistic.component';
import { RouterModule, Routes } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkhourChartStatisticComponent } from './workhour-chart-statistic/workhour-chart-statistic.component';
import { WorkhourStatisticsServiceService } from 'src/Services/Statistics/WorkhourStatisticsService.service';
import { DatePickerComponent } from 'src/app/theme/shared/components/date-picker/date-picker.component';
import { PagingnavComponent } from "../../../theme/shared/components/pagingnav/pagingnav.component";
import { SpinnerBetaComponent } from "../../../theme/shared/components/spinner-beta/spinner-beta.component";
import { FormsModule } from '@angular/forms';
import { PipeSharePipe } from "../../../theme/shared/components/Pipe/pipe-share.pipe";

const routes : Routes =[
  {
    path : '',
    children:[
      {path: '',component:WorkhourListStatisticComponent,pathMatch: 'full'},
    
    ]
  }
]



@NgModule({
    declarations: [WorkhourListStatisticComponent, WorkhourChartStatisticComponent],
    exports: [WorkhourListStatisticComponent],
    providers: [WorkhourStatisticsServiceService, DecimalPipe],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgApexchartsModule, NgbNavModule,
        DatePickerComponent,
        PagingnavComponent,
        FormsModule,
        SpinnerBetaComponent,
        PipeSharePipe
    ]
})
export class WorkhourStatisticModule { }
