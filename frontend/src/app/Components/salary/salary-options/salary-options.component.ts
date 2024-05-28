/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-output-on-prefix */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/Services/General/general.service';
import { SalaryService } from 'src/Services/Salary/salary.service';
import { ConfirmationDialogService } from 'src/app/theme/shared/components/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-salary-options',
  templateUrl: './salary-options.component.html',
  styleUrls: ['./salary-options.component.scss']
})
export class SalaryOptionsComponent implements OnInit {
  constructor(private Service:SalaryService,private confirmationDialogService: ConfirmationDialogService,private generalService : GeneralService,private router : Router,private route:ActivatedRoute){}
  @Input() selectedID : string
  @Output() onUpdate: EventEmitter<string> =   new EventEmitter();
  @Output() onSuccess: EventEmitter<any> = new EventEmitter();
  RanksData : any
  PositionsData : any
  selectedRankID : string
  selectedPositionID : string
  id:string
  data : any={
    id: "",
  rankID: "",
  positionID: "",
  money: 0
  }


  ngOnInit(): void {
    if(this.selectedID!='')
    this.GetSalaryID()
    this.GetRankAndPositionInfo()
  }

  GetSalaryID(){
    this.Service.GetSalaryByID(this.selectedID).subscribe((res)=>{
      this.data.id =res.id
      this.data.rankID=res.levelName
      this.data.positionID=res.positionName
      this.data.money=res.money
    })
  }

  onRankchange(){
    return this.selectedRankID
  }

  onPositionchange(){
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

  Add(data:any){
    this.confirmationDialogService
      .confirm('Please confirm..', 'Do you really want to ADD ?')
      .then((confirmed) => {
        if (confirmed) {
          this.Service.CreateSalary(data).subscribe((res)=>{
            if(res){
                this.onSuccess.emit(res)
            }
          })

        }
      })

}

  Update(salary : any){
    this.onUpdate.emit(this.selectedID)
    this.confirmationDialogService
      .confirm('Please confirm..', 'Do you really want to Edit ?')
      .then((confirmed) => {
        if (confirmed) {
          this.Service.UpdateSalary(this.selectedID,salary).subscribe((res)=>{
                  this.onSuccess.emit(res)
          })

        }
      })

  }
}
