/* eslint-disable @angular-eslint/no-output-on-prefix */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Allowancemodel } from 'src/Model/AllowanceModel';
import { EwaAutoModel } from 'src/Model/EmployeeWithAllowance/EwaAutoModel';
import { EWAServiceService } from 'src/Services/EmployeeWithAllowance/ewaservice.service';
import { GeneralService } from 'src/Services/General/general.service';

@Component({
  selector: 'app-ewa-add',
  templateUrl: './ewa-add.component.html',
  styleUrls: ['./ewa-add.component.scss']
})
export class EwaAddComponent implements OnInit {
  constructor(private ewaService : EWAServiceService,private generalSerive : GeneralService){}
  @Output() onSuccess : EventEmitter<void> = new EventEmitter()
  DataofAllowance : Allowancemodel[]
  CurrentTime = new Date()
  SelectedAllowance : string


  ngOnInit(): void {
    this.getAllAllowance()
  }

  OnAllowanceChange(){
    return this.SelectedAllowance
  }

  getAllAllowance(){
    this.generalSerive.GetAllowance().subscribe((res)=>{
      this.DataofAllowance = res
    })
  }

  AutoGetAllowance(data : EwaAutoModel){
    data.Day = this.CurrentTime.getDate()
    data.Month = this.CurrentTime.getMonth()+1
    data.Year = this.CurrentTime.getFullYear()
    console.log(data)
    this.ewaService.AutoEWA(data).subscribe()
  }
}
