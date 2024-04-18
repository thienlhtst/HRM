/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @angular-eslint/no-output-on-prefix */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Allowancemodel } from 'src/Model/Allowance/AllowanceModel';
import { EmployeeRulesModel } from 'src/Model/Employee/EmployeeRulesModel';
import { SalaryModelList } from 'src/Model/SalaryModelList';
import { AllowanceServiceService } from 'src/Services/Allowance/AllowanceService.service';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { GeneralService } from 'src/Services/General/general.service';
import { ConfirmationDialogService } from 'src/app/theme/shared/components/confirmation-dialog/confirmation-dialog.service';
import { FormOptionsService } from 'src/Services/FormOptions/form-options.service';
import { AllowEmployeeModel } from 'src/Model/AllowancesAndEmployeeRules/AllowEmployeeModel';
import { AERulesAddModel } from 'src/Model/AllowancesAndEmployeeRules/AERulesAddModel';
import { AllowanceRulesModel } from 'src/Model/AllowancesAndEmployeeRules/AllowanceRulesModel';
import { EmployeeModel } from 'src/Model/Employee/EmployeeModel';


@Component({
  selector: 'app-allowance-rules',
  templateUrl: './allowance-rules.component.html',
  styleUrls: ['./allowance-rules.component.scss']
})
export class AllowanceRulesComponent implements OnInit {
itemlist: any;
  constructor(private service : AllowanceServiceService,
    private EmployeeService : EmployeeService,
    private AllowanceService : AllowanceServiceService,
    private generalService : GeneralService,
    private router : Router,
    private confirmService : ConfirmationDialogService,

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
  EmployeeToPush : EmployeeRulesModel
  pagecountAllowEmployee : number = 1
  ShowFormAddRules : boolean = false
  date : Date = new Date()
  listEmployeeToAllow : AERulesAddModel[] = []
  listToShow : AllowanceRulesModel [] = []
  DataToShow : AllowanceRulesModel
  DataToPush : AERulesAddModel
  allowanceMap = new Map<string, AERulesAddModel>()


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




  ClickToGetAllowance(id : string){
    if(this.IDGetofAllowance === id)
      this.IDGetofAllowance = null
    else{
      this.IDGetofAllowance = id
      this.EmployeeService.GetEmployeeByAllowance(this.IDGetofAllowance).subscribe((res)=>{
        this.DataOfEmployee = res
      })
      console.log(this.IDGetofAllowance)
    }
  }

  ClickToGetEmployee(id : string){

    if(this.IDGetofEmployee === id)
      this.IDGetofEmployee = null
    else{
      this.IDGetofEmployee = id
      this.AllowanceService.getAllowanceByID(this.IDGetofAllowance).subscribe((resallo=>{
        if(resallo){
          this.EmployeeService.GetEmployeebyID(id).subscribe((resemployee)=>{
            const Exist = this.listEmployeeToAllow.some(e=>e.employeeID === resemployee.id && e.allowanceID === resallo.id)
              if(!Exist)
              {
                this.DataToPush ={
                allowanceID : resallo.id,
                employeeID : resemployee.id,
                date : this.date.toISOString().split('T')[0]
                }
                this.DataToShow = {
                  allowanceName : resallo.name,
                  employeeName : resemployee.firstName + " " + resemployee.middleName + " " + resemployee.lastName,
                  date : this.date.toISOString().split('T')[0]
                }
              this.listToShow.push(this.DataToShow)
              this.listEmployeeToAllow.push(this.DataToPush)
            }

          })
        }
      }))



    }

  }



  RemoveAllowanceRules(index : number){

    const GetReturnEmployeeID = this.listEmployeeToAllow.splice(index,1)[0]
    const GetReturnEmployeeName = this.listToShow.splice(index,1)[0]
    this.listToShow.splice(index, 0);
    this.listEmployeeToAllow.splice(index, 0);
      this.EmployeeToPush = {
        id : GetReturnEmployeeID.employeeID,
        firstName :  GetReturnEmployeeName.employeeName,
        middleName : "",
        lastName : ""
      }
       this.DataOfEmployee.push(this.EmployeeToPush)



  }

  RemoveEmployeeDataList(index : number){
    this.DataOfEmployee.splice(index,1)
  }




  GetPagingofAllowEmployee(){
    this.service.getAllowEmployee().subscribe((res)=>{
      this.datasofAllowEmployee = res
    })
  }


  Add(){
    this.confirmService.confirm('Please Confirm','You wanna add ?')
    .then((confirmed)=>{
      if(confirmed){
        this.service.CreateAllowanceRules(this.listEmployeeToAllow).subscribe((res)=>{
          this.confirmService.confirm('Succeess','Add Succeed')
        })
      }
    })

  }


}
