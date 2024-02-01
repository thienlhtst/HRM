import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryStatisticModule } from './salary-statistic/salary-statistic.module';
import { WorkhourStatisticModule } from './workhour-statistic/workhour-statistic.module';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes =[
  {
    path : '',
    children:[
      {
      path:'workhour',
      loadChildren:() => import ('./workhour-statistic/workhour-statistic.module').then(m=>m.WorkhourStatisticModule)
    },
      {
        path:'salary',
      loadChildren:() => import ('./salary-statistic/salary-statistic.module').then(m=>m.SalaryStatisticModule)
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    SalaryStatisticModule,
    WorkhourStatisticModule,
    RouterModule.forChild(routes),
  ],
})
export class StatisticsModule { }
