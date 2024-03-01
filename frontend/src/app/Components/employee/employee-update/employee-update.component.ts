/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './../../../../Services/Employee/employee.service';
import { Component, OnInit } from '@angular/core';
import { SalaryModelList } from 'src/Model/SalaryModelList';
import { GeneralService } from 'src/Services/General/general.service';
import { EmployeeUpdateModel } from 'src/Model/Employee/EmployeeUpdateModel';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit {
  constructor(private service : EmployeeService,private generalService : GeneralService,private router : Router,private route : ActivatedRoute ){}
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
  ngOnInit(): void {
    this.id = `${this.route.snapshot.paramMap.get('id')}`
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

  Update(employee : EmployeeUpdateModel){
    console.log(employee)
    employee.salaryID = this.selectedSalaryID
    this.service.UpdateEmployee(this.id,employee).subscribe((res)=>{
      if(res){
      alert('Update Success')
      this.router.navigate(['/employee'])
      }
    })
  }

}
