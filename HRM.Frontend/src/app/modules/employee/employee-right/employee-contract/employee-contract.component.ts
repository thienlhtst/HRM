import { Component, OnInit } from '@angular/core';
import { LabourContractModel } from 'src/Model/LabourContract/LabourContractModel';
import { LabourContractofEmployeeModel } from 'src/Model/LabourContract/LabourContractofEmployeeModel';
import { WorkHourStatisticEmployee } from 'src/Model/Workhours/WorkHourofEmployee';
import { LabourContractServiceService } from 'src/Services/LabourContract/labour-contract-service.service';

@Component({
  selector: 'app-employee-contract',
  templateUrl: './employee-contract.component.html',
  styleUrls: ['./employee-contract.component.css']
})
export class EmployeeContractComponent implements OnInit {

  constructor(private contractservice : LabourContractServiceService) { }
 
  date :WorkHourStatisticEmployee = {
    month: 0,
    year: 0
  }
  yearoptions : number[] = []
  today: Date = new Date();
  listofday : number[] = []
  totalWorkHour : number = 1
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
  datas: LabourContractofEmployeeModel[] = []
  dataloaded : boolean = true
  ngOnInit() {
    this.date.year = new Date().getFullYear();
    this.date.month= new Date().getMonth();
    if(this.date.month==0){
      this.date.year=this.date.year-1
      this.date.month=12
    }
    this.yearoptions =  this.generateYearOptions(this.date.year, this.date.year - 20)
    this.GetLabourContractData()
  }

  generateYearOptions(startYear: number, endYear: number): number[] {
    const years = [];
    for (let year = startYear; year >= endYear; year--) {
      years.push(year);
    }
    return years;
  }
  onChangeMonth(event:any){
    this.listofday.splice(0,50)
    this.date.month = parseInt(event.target.value);
 
    console.log(this.date.month)

  }
  onChangeYear(event:any){
    this.listofday.splice(0,50)
    this.date.year = parseInt(event.target.value);
    
    }

  GetLabourContractData(){
    this.contractservice.GetContractByEmployeeID("E9A7AF53-8973-418A-AB30-0147AB4D937B").subscribe((res)=>{
      this.datas = res
      this.dataloaded = true
      
    })
    console.log(this.datas)
  }
}
