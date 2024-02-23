/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-output-on-prefix */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SalaryModel } from 'src/Model/SalaryModel';
import { SalaryService } from 'src/Services/Salary/salary.service';
import { GeneralService } from 'src/Services/General/general.service';

@Component({
  selector: 'app-salary-add',
  templateUrl: './salary-add.component.html',
  styleUrls: ['./salary-add.component.scss']
})
export class SalaryAddComponent implements OnInit {
  constructor(private service:SalaryService,private generalService : GeneralService,private router : Router){}

  @Output() onSuccess : EventEmitter<void> = new EventEmitter()

  RanksData : any
  PositionsData : any
  selectedRankID : string
  selectedPositionID : string

  ngOnInit(): void {
    this.GetRankAndPositionInfo()

  }
  onRankChange(){
    return this.selectedRankID

  }
  onPositionChange(){
    return this.selectedPositionID
  }


  GetRankAndPositionInfo(){
    this.generalService.GetRank().subscribe((resrank)=>{
      this.RanksData = resrank


    })
    this.generalService.GetPosition().subscribe((resposition)=>{
      this.PositionsData = resposition

    })
  }

  Add(data:SalaryModel){
      this.service.CreateSalary(data).subscribe((res)=>{
        if(res){
          alert('Success')
          setTimeout(() => {
            this.onSuccess.emit()
          }, 5);
          window.location.reload()
        }
        else{
          alert('Fail')
          setTimeout(() => {
            this.onSuccess.emit()
          }, 5);
        }
      })
  }
}
