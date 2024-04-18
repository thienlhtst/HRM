/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './../../../../Services/Employee/employee.service';
import { Component, OnInit } from '@angular/core';
import { SalaryModelList } from 'src/Model/SalaryModelList';
import { GeneralService } from 'src/Services/General/general.service';
import { EmployeeUpdateModel } from 'src/Model/Employee/EmployeeUpdateModel';
import { EmployeeModel } from 'src/Model/Employee/EmployeeModel';
import { ConfirmationDialogService } from 'src/app/theme/shared/components/confirmation-dialog/confirmation-dialog.service';
import { Alert } from 'src/Model/Alert';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit {
  constructor(private service : EmployeeService,
    private generalService : GeneralService,
    private router : Router,private route : ActivatedRoute,
    private confirm : ConfirmationDialogService
    ){}
  id : string
  selectedGender : number
  selectedDate: string
  selectedActive : number
  RanksData : any
  PositionsData : any
  SalarysData : SalaryModelList[]
  selectedRankID : string
  selectedPositionID : string
  selectedSalaryID : string
  selectedFilePath : string
  data : EmployeeModel
  message : any = ''
  Action : string
  alert : Alert
  ngOnInit(): void {
    this.id = `${this.route.snapshot.paramMap.get('id')}`
    this.GetRankAndPositionInfo()
    this.GetEmployeeID()
  }

  GetRankAndPositionInfo(){
    this.generalService.GetRank().subscribe((resrank)=>{
      this.RanksData = resrank
    })
    this.generalService.GetPosition().subscribe((resposition)=>{
      this.PositionsData = resposition
    })
  }

  GetEmployeeID(){
    this.service.GetEmployeebyID(this.id).subscribe((res)=>{
      this.data = res
    })
  }

  onRankChange(){
    return this.selectedRankID

  }
  onPositionChange(){
    this.GetSalaryByRankAndPosition()
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
  }

  OnchangeFile(event : any){
    if(event.target.files.length > 0 ){
      const file = event.target.files[0];
      this.selectedFilePath = file
    }
  }



  OnGenderChange(){
    console.log(this.selectedGender)
    return this.selectedGender.toString()

  }

  OnActiveChange(){
    console.log(this.selectedActive)
    return this.selectedActive.toString()

  }

  onDateChange(event): void {
    this.selectedDate = event.target.value.toString();
  }

  SetAction(action : string){
    this.Action = action
  }

  OnSubmit(employee : EmployeeUpdateModel){
    if(this.Action == 'Confirm'){
      employee.salaryID = this.selectedSalaryID
      employee.sex = this.data.sex
      this.confirm.confirm('Please Confirm','You wanna add ? ')
      .then((confirmed)=>{
        if(confirmed){
          this.service.UpdateEmployee(this.id,employee).subscribe((res)=>{
            if(res){
              this.confirm.confirm('Susccess','Update Succeed ')
            this.router.navigate(['/employee'])
            }
          })
        }
      })
      }
      this.router.navigate(['/employee'])
    }

    flagchangeHandler(flagchange: boolean) {
      this.message = flagchange;
    }
}
