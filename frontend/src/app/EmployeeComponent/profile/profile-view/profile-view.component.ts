import { GeneralService } from 'src/Services/General/general.service';
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/Model/Employee/EmployeeModel';
import { SalaryModel } from 'src/Model/SalaryModel';
import { SalaryModelList } from 'src/Model/SalaryModelList';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { SalaryService } from 'src/Services/Salary/salary.service';
import { TokenService } from 'src/Services/Token/token.service';
import { EmployeeModelHasSalary } from 'src/Model/Employee/EmployeeModelHasSalary';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  constructor(private tokenService : TokenService,private employeeService : EmployeeService,private GeneralService : GeneralService){}
  ngOnInit(): void {
    this.IdOfthisEmployee = this.tokenService.getTokenId()
    this.GetEmployee()
  }
  EmployeeData : EmployeeModel
  SalaryData : SalaryModelList[]
  EmployeeListData : EmployeeModelHasSalary[]
  money : number
  IdOfthisEmployee : string


  GetEmployee(){
    this.employeeService.GetEmployeebyID(this.IdOfthisEmployee).subscribe((res)=>{
      this.EmployeeData = res
    })
  }

  ButtonToGetSalary(){
    this.GeneralService.GetSalary().subscribe((ressalary)=>{
      this.SalaryData = ressalary
    this.employeeService.GetEmployeeHasSalary().subscribe((resemployee)=>{
      for(const employee of resemployee){
          if(employee.id == this.EmployeeData.id){
            for(const salary of this.SalaryData){
              if(employee.salaryID == salary.id){
                this.money = salary.money
              }
            }
          }


      }
    })

    })



  }

}
