import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { SalaryStatisticComponent } from './salary-statistic.component';
import { SalaryStatisticListComponent } from './salary-statistic-list/salary-statistic-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SalaryStatisticChartComponent } from './salary-statistic-chart/salary-statistic-chart.component';
import { SalaryStatisticServiceService } from 'src/Services/Statistics/SalaryStatisticService.service';
import { FormsModule } from '@angular/forms';
import { PagingnavComponent } from 'src/app/modules/share/components/pagingnav/pagingnav.component';
import { SpinnerBetaComponent } from 'src/app/modules/share/components/spinner-beta/spinner-beta.component';
import { PipeSharePipe } from 'src/app/modules/share/components/Pipe/pipe-share.pipe';
import { BrowserModule } from '@angular/platform-browser';
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
    providers: [SalaryStatisticServiceService, DecimalPipe],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgApexchartsModule, NgbNavModule,
        PagingnavComponent ,
        FormsModule,
        SpinnerBetaComponent,
        PipeSharePipe
    ]
})
export class SalaryStatisticModule { }
