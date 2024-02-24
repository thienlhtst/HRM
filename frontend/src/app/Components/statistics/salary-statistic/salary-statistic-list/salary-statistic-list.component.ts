import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { SalaryStatisticServiceService } from 'src/Services/Statistics/SalaryStatisticService.service';

@Component({
  selector: 'app-salary-statistic-list',
  templateUrl: './salary-statistic-list.component.html',
  styleUrls: ['./salary-statistic-list.component.css']
})
export class SalaryStatisticListComponent implements OnInit {
  salaryemployee;
  top5salary;
  constructor(private services:SalaryStatisticServiceService) { }

  ngOnInit() {

  forkJoin([
    this.services.GetTopSalary(5),
    this.services.Getpagingsalary('',4,2023)
  ]).subscribe(([data1,data2])=>{
    this.top5salary=data1
    this.salaryemployee = data2.items
  })
    
  }

}
