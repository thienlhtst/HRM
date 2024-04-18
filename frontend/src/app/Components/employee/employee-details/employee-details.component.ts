/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeModel } from 'src/Model/Employee/EmployeeModel';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { ButtonComponent, ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { LabourContractServiceService } from 'src/Services/LabourContract/labour-contract-service.service';
import { LabourContractModel } from 'src/Model/LabourContract/LabourContractModel';
import { AllowanceServiceService } from 'src/Services/Allowance/AllowanceService.service';
import { Allowancemodel } from 'src/Model/Allowance/AllowanceModel';
import { EmployeeHasAllowanceModel } from 'src/Model/Employee/EmployeeHasAllowanceModel';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  constructor(private service : EmployeeService,
              private activeRoute : ActivatedRoute,
              private contractService : LabourContractServiceService,
              private allowanceService : AllowanceServiceService
            ){}

  data : EmployeeModel
  id :string
  blank : string = " "
  ContractData : LabourContractModel
  AllowanceData : EmployeeHasAllowanceModel[]
  flag : number

  ngOnInit(): void {
    this.id = `${this.activeRoute.snapshot.paramMap.get('id')}`
    this.GetEmployeeByID()
    this.flag = 1
  }

  GetEmployeeByID(){
    this.service.GetEmployeebyID(this.id).subscribe((res)=>{
      this.data = res
    })
  }

  ButtonClickToInfo(){
    this.GetEmployeeByID()
    this.flag = 1
  }
  ButtonClickToContract(){
    this.contractService.GetAllContractByID(this.id).subscribe((res)=>{
      this.ContractData = res
      this.flag = 2
    })
  }

  ButtonClickToAllowance(){
    this.service.GetAllowanceByEmployeeID(this.id).subscribe((res)=>{
      this.AllowanceData = res
      this.flag = 3
      console.log(this.AllowanceData)
    })
  }
}
