/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllowEmployeeModel } from 'src/Model/Allowance/AllowEmployeeModel';
import { Allowancemodel } from 'src/Model/AllowanceModel';
import { EmployeeRulesModel } from 'src/Model/Employee/EmployeeRulesModel';
import { SalaryModelList } from 'src/Model/SalaryModelList';
import { AllowanceServiceService } from 'src/Services/Allowance/AllowanceService.service';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { GeneralService } from 'src/Services/General/general.service';

@Component({
  selector: 'app-allowance-rules',
  templateUrl: './allowance-rules.component.html',
  styleUrls: ['./allowance-rules.component.scss']
})
export class AllowanceRulesComponent implements OnInit {
  constructor(private service : AllowanceServiceService,private EmployeeService : EmployeeService,private generalService : GeneralService, private router : Router){}
  ngOnInit(): void {
    this.GetAll()
    this.GetRankAndPositionInfo()
    this.GetPagingofAllowEmployee()
  }
  datas:Allowancemodel[]
  datasofAllowEmployee : AllowEmployeeModel[]
  IDGetofAllowance : string
  IDGetofEmployee : string
  RanksData : any
  PositionsData : any
  SalarysData : SalaryModelList[]
  selectedRankID : string
  selectedPositionID : string
  selectedSalaryID : string
  DataOfEmployee : EmployeeRulesModel[]
  pagecountAllowEmployee : number = 1



  GetAll(){
    this.service.getAllowance().subscribe((res)=>{
      this.datas = res

    })
  }

  GetRankAndPositionInfo(){
    this.generalService.GetRank().subscribe((resrank)=>{
      this.RanksData = resrank
    })
    this.generalService.GetPosition().subscribe((resposition)=>{
      this.PositionsData = resposition
    })
  }


  onRankChange(){
    return this.selectedRankID

  }
  onPositionChange(){
    return this.selectedPositionID
  }

  GetSalaryByRankAndPosition(){
    this.generalService.GetSalary().subscribe((ressalary)=>{
      this.SalarysData = ressalary
      for(const salary of this.SalarysData){
        if(salary.rankID == this.selectedRankID && salary.positionID == this.selectedPositionID)
        {
        this.selectedSalaryID = salary.id
      }

      }

    })
    this.EmployeeService.GetEmployeeByPositionAndRank(this.selectedSalaryID).subscribe((res)=>{
      this.DataOfEmployee = res
    })
  }


  ClickToGetAllowance(id : string){
    if(this.IDGetofAllowance === id)
      this.IDGetofAllowance = null
    else{
      this.IDGetofAllowance = id
      this.EmployeeService.GetEmployeeByAllowance(this.IDGetofAllowance).subscribe((res)=>{
        this.DataOfEmployee = res
      })
    }
  }

  ClickToGetEmployee(id : string){
    if(this.IDGetofEmployee === id)
      this.IDGetofEmployee = null
    else{
      this.IDGetofEmployee = id
      console.log(this.IDGetofEmployee)
    }

  }

  GetPagingofAllowEmployee(){
    this.service.getAllowEmployee().subscribe((res)=>{
      this.datasofAllowEmployee = res
    })
  }


}
