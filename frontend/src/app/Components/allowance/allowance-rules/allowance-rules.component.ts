/* eslint-disable @angular-eslint/no-output-on-prefix */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AllowEmployeeModel } from 'src/Model/Allowance/AllowEmployeeModel';
import { AllowanceRulesModel } from 'src/Model/Allowance/AllowanceRulesModel';
import { Allowancemodel } from 'src/Model/AllowanceModel';
import { EmployeeRulesModel } from 'src/Model/Employee/EmployeeRulesModel';
import { SalaryModelList } from 'src/Model/SalaryModelList';
import { AllowanceServiceService } from 'src/Services/Allowance/AllowanceService.service';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { GeneralService } from 'src/Services/General/general.service';
import { ConfirmationDialogService } from 'src/app/theme/shared/components/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-allowance-rules',
  templateUrl: './allowance-rules.component.html',
  styleUrls: ['./allowance-rules.component.scss']
})
export class AllowanceRulesComponent implements OnInit {
  constructor(private service : AllowanceServiceService,
    private EmployeeService : EmployeeService,
    private generalService : GeneralService,
    private router : Router,
    private confirmService : ConfirmationDialogService
    ){}
    @Output() onConfirm : EventEmitter<number> = new EventEmitter();
  ngOnInit(): void {
    this.GetAll()
    this.GetRankAndPositionInfo()
    this.GetPagingofAllowEmployee()
    this.GetAllowanceAndEmployeeInfo()
  }
  datas:Allowancemodel[]
  datasofAllowEmployee : AllowEmployeeModel[]
  IDGetofAllowance : string
  IDGetofEmployee : string
  RanksData : any
  PositionsData : any
  SalarysData : SalaryModelList[]
  AllowanceData : any
  EmployeeData : any
  selectedAllowanceID : string
  selectedEmployeeID : string
  selectedRankID : string
  selectedPositionID : string
  selectedSalaryID : string
  DataOfEmployee : EmployeeRulesModel[]
  pagecountAllowEmployee : number = 1
  ShowFormAddRules : boolean = false
  date : Date = new Date()



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

  GetAllowanceAndEmployeeInfo(){
    this.generalService.GetAllowance().subscribe((resallowance)=>{
      this.AllowanceData = resallowance
    })
    this.generalService.GetEmployee().subscribe((resemployee)=>{
      this.EmployeeData = resemployee
    })
  }

  ClicktoShowFormAdd(): void{
    this.ShowFormAddRules = !this.ShowFormAddRules
  }

  // onRankChange(){
  //   return this.selectedRankID

  // }
  // onPositionChange(){
  //   return this.selectedPositionID
  // }

  onAllowanceChange(){
    return this.selectedAllowanceID
  }

  onEmployeeChange(){
    return this.selectedEmployeeID
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


  Add(data : AllowanceRulesModel){
    this.confirmService.confirm('Please Confirm','You wanna add ?')
    .then((confirmed)=>{
      if(confirmed){
        this.service.CreateAllowanceRules(data).subscribe((res)=>{
          this.onConfirm.emit(res)

        })
      }
    })

  }


}
