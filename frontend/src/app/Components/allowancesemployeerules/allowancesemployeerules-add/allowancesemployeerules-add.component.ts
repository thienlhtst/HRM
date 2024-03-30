/* eslint-disable @angular-eslint/no-output-on-prefix */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AllowancesAndEmployeeRulesService } from 'src/Services/AllowancesAndEmployeeRules/allowances-and-employee-rules.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConfirmationDialogService } from 'src/app/theme/shared/components/confirmation-dialog/confirmation-dialog.service';
import { GeneralService } from 'src/Services/General/general.service';
import { Allowancemodel } from 'src/Model/AllowanceModel';
import { EmployeeModel } from 'src/Model/Employee/EmployeeModel';
import { AERulesModel } from 'src/Model/AllowancesAndEmployeeRules/AERulesModel';

@Component({
  selector: 'app-allowancesemployeerules-add',
  templateUrl: './allowancesemployeerules-add.component.html',
  styleUrls: ['./allowancesemployeerules-add.component.scss']
})
export class AllowancesemployeerulesAddComponent implements OnInit {
  constructor(private service : AllowancesAndEmployeeRulesService,
              private generalSerivce: GeneralService,
              private confirm : ConfirmationDialogService
    ){}

    @Output() onSuccess: EventEmitter<void> = new EventEmitter();
    @Output() onConfirm : EventEmitter<number> = new EventEmitter();

    DatasOfAllowance : Allowancemodel[]
    DatasOfEmployee : EmployeeModel[]
    selectedAllowanceID : string
    selectedEmployeeID : string

  ngOnInit(): void {
    this.GetAllowanceAndEmployee()
  }


  GetAllowanceAndEmployee(){
    this.generalSerivce.GetAllowance().subscribe((allowanceRes)=>{
      this.DatasOfAllowance = allowanceRes
    })
    this.generalSerivce.GetEmployee().subscribe((employeeRes)=>{
      this.DatasOfEmployee = employeeRes
    })
  }

  onAllowanceChange(){
    return this.selectedAllowanceID
  }
  onEmployeeChange(){
    return this.selectedEmployeeID
  }

  Add(data : AERulesModel){
    this.confirm.confirm('Please Confirm','You wanna add ?')
    .then((confirmed)=>{
      if(confirmed){
        this.service.CreateRules(data)
      }
    })
  }

}
