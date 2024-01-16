import { Component, OnInit } from '@angular/core';
import { SalaryModel } from 'src/Model/SalaryModel';
import { SalaryService } from 'src/Service/Salary/salary.service';

@Component({
  selector: 'app-salary-list',
  templateUrl: './salary-list.component.html',
  styleUrls: ['./salary-list.component.scss']
})
export class SalaryListComponent implements OnInit{
  constructor(private service : SalaryService){}
  datas : SalaryModel[]

  ngOnInit(): void {
    this.GetAll()
  }

  GetAll(){
    this.service.GetSalary().subscribe((res)=>{
      this.datas = res
    })
  }

}
