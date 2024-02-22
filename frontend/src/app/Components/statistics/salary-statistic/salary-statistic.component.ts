import { Component, OnInit } from '@angular/core';
import { SalaryStatisticListComponent } from './salary-statistic-list/salary-statistic-list.component';
import { SalaryStatisticChartComponent } from './salary-statistic-chart/salary-statistic-chart.component';
@Component({
  selector: 'app-salary-statistic',
  templateUrl: 'salary-statistic.component.html',
  styleUrls: ['./salary-statistic.component.css']
})
export class SalaryStatisticComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
