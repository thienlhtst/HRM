import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { WorkhourListStatistic1Component } from './workhour-list-statistic/workhour-list-statistic.component';
import { RouterModule, Routes } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkhourChartStatisticComponent } from './workhour-chart-statistic/workhour-chart-statistic.component';
import { WorkhourStatisticsServiceService } from 'src/Services/Statistics/WorkhourStatisticsService.service';
import { FormsModule } from '@angular/forms';
import { DatePickerComponent } from 'src/app/modules/share/components/date-picker/date-picker.component';
import { PagingnavComponent } from 'src/app/modules/share/components/pagingnav/pagingnav.component';
import { SpinnerBetaComponent } from 'src/app/modules/share/components/spinner-beta/spinner-beta.component';
import { PipeSharePipe } from 'src/app/modules/share/components/Pipe/pipe-share.pipe';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
    declarations: [WorkhourListStatistic1Component, WorkhourChartStatisticComponent],
    exports: [WorkhourListStatistic1Component],
    providers: [WorkhourStatisticsServiceService, DecimalPipe],
    imports: [
        CommonModule,
        NgApexchartsModule, NgbNavModule,
        DatePickerComponent,
        PagingnavComponent,
        FormsModule,
        SpinnerBetaComponent,
        PipeSharePipe
    ]
})
export class WorkhourStatisticModule { }
