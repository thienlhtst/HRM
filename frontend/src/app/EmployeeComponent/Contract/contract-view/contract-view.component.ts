/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { LabourContractofEmployeeModel } from 'src/Model/LabourContract/LabourContractofEmployeeModel';
import { LabourContractServiceService } from 'src/Services/LabourContract/labour-contract-service.service';
import { TokenService } from 'src/Services/Token/token.service';

@Component({
  selector: 'app-contract-view',
  templateUrl: './contract-view.component.html',
  styleUrls: ['./contract-view.component.scss']
})
export class ContractViewComponent implements OnInit {
  constructor(private tokenService : TokenService,private service : LabourContractServiceService){}

  datas : LabourContractofEmployeeModel[]
  IdOfthisEmployee : string
  selectedMonth : number
  //columnsssss  = ['id','employeeID','content','contractSigninDate','contractTerm','active']
  columns : any[] = [
    {
      id : '1',
      name : 'ID',
      column : 'id',
      class : '1'
    },
    {
      id : '2',
      name : 'Content',
      column : 'content'
    },
    {
      id : '3',
      name : 'Date',
      column : 'contractSigninDate'
    },
    {
      id : '4',
      name : 'Contract Term',
      column : 'contractTerm'
    },
    {
      id : '5',
      name : 'Active',
      column : 'active'
    },
  ]
  dataloaded : boolean

  ngOnInit(): void {
    this.IdOfthisEmployee = this.tokenService.getTokenId()
    this.getContractofEmployee()

  }


  getSeletedMonth(){
    return this.selectedMonth
  }

  getContractofEmployee(){
    this.service.GetContractByEmployeeID(this.IdOfthisEmployee).subscribe((res)=>{
      this.datas = res
      this.dataloaded = true
    })
  }


  // getContractofEmployeeByMonth(){
  //   this.service.GetContractByEmployeeID(this.IdOfthisEmployee).subscribe((res)=>{
  //     this.datas = res
  //   })
  //   this.datas.forEach((item)=>{
  //     if(item.contractSigninDate)
  //   })
  // }






}
