import { EmployeeCreateModel } from 'src/Model/Employee/EmployeeCreateModel';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PositionModel } from 'src/Model/PositionModel';
import { RankModel } from 'src/Model/Rank/RankModel';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { GeneralService } from 'src/Services/General/general.service';
import { NotificationComponent } from '../../../../shared/components/Notification/Notification.component';
import { map } from 'rxjs/operators';
import { SalaryModel } from 'src/Model/SalaryModel';
import { EmployeeModel } from 'src/Model/Employee/EmployeeModel';
import { SalaryModelList } from 'src/Model/SalaryModelList';
import { ConfirmationDialogService } from '../../../../shared/components/confirmation-dialog/confirmation-dialog.service';
import { Alert } from 'src/Model/Alert';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  constructor(private service : EmployeeService,
    private router : Router,
    private generalService : GeneralService,
    private confirm : ConfirmationDialogService
    ){}
  datas : EmployeeModel
  messageRequest : string = ''
  selectedGender : number
  selectedDate: string
  RanksData : any
  PositionsData : any
  SalarysData : SalaryModelList[]
  selectedRankID : string
  selectedPositionID : string
  selectedSalaryID : string
  selectedFilePath : string
  message : any = ''
  alert : Alert
  Action : string

  @ViewChild(NotificationComponent) childnoti:NotificationComponent

  ngOnInit(): void {
    this.OnGenderChange()
    this.GetRankAndPositionInfo()
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
    return this.selectedGender

  }


  onDateChange(event): void {
    this.selectedDate = event.target.value;
  }


  SetAction(action : string){
    this.Action = action
  }

  OnSubmit(data : EmployeeCreateModel){
    if(this.Action == 'confirm'){
      data.salaryID = this.selectedSalaryID
      data.active = 1
      this.confirm.confirm('Please Confirm','You wanna add ? ')
      .then((confirmed)=>{
        if(confirmed){
          this.service.CreateEmployee(data).subscribe((response)=>{
            if(response){
              this.confirm.confirm('Success','Add Succeed')
              this.router.navigate(['/employee'])
            }
          })
        }
      })
    }
    this.router.navigate(['/employee'])


  }

  flagchangeHandler(flagchange : boolean){
    this.message = flagchange
  }
}
