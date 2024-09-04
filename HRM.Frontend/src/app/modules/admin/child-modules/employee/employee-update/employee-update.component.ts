/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { Component, OnInit } from '@angular/core';
import { SalaryModelList } from 'src/Model/SalaryModelList';
import { GeneralService } from 'src/Services/General/general.service';
import { EmployeeUpdateModel } from 'src/Model/Employee/EmployeeUpdateModel';
import { EmployeeModel } from 'src/Model/Employee/EmployeeModel';
import { Alert } from 'src/Model/Alert';
import { ConfirmationDialogService } from 'src/app/modules/share/components/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss','../../../../../../scss/shared/sreach.scss']
})
export class EmployeeUpdateComponent implements OnInit {
  constructor(private service : EmployeeService,
    private generalService : GeneralService,
    private router : Router,private route : ActivatedRoute,
    private confirm : ConfirmationDialogService
    ){}
  id : string =""
  selectedGender : number | undefined
  selectedDate: string | undefined
  selectedActive : number | undefined
  RanksData : any
  PositionsData : any
  SalarysData : SalaryModelList[] | undefined
  selectedRankID : string | undefined
  selectedPositionID : string | undefined
  selectedSalaryID : string | undefined
  selectedFilePath : string | undefined
  data : EmployeeModel | undefined
  message : any = ''
  Action : string | undefined
  alert : Alert | undefined
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
        if(salary.levelID == this.selectedRankID && salary.positionID == this.selectedPositionID)
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
    return this.selectedGender?.toString() || '';
  }

  OnActiveChange(){
    console.log(this.selectedActive)
    return this.selectedActive?.toString() || ''

  }

  onDateChange(event:any): void {
    this.selectedDate = event.target.value.toString();
  }

  SetAction(action : string){
    this.Action = action
  }

  OnSubmit(employee : EmployeeUpdateModel){
    if(this.Action == 'Confirm'){
      if (this.selectedSalaryID !== undefined) {
        employee.salaryID = this.selectedSalaryID;
      }
      if (this.data !== undefined) {
        employee.sex = this.data.sex;
      }
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
