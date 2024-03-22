import { EmployeeModel } from './../../../../Model/Employee/EmployeeModel';
import { OnInit } from '@angular/core';
/* eslint-disable @angular-eslint/no-output-on-prefix */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LabourContractModel } from 'src/Model/LabourContract/LabourContractModel';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { LabourContractServiceService } from 'src/Services/LabourContract/labour-contract-service.service';

@Component({
  selector: 'app-labourcontract-options',
  templateUrl: './labourcontract-options.component.html',
  styleUrls: ['./labourcontract-options.component.scss']
})
export class LabourcontractOptionsComponent implements OnInit {
  constructor(private service : LabourContractServiceService,private employeeService : EmployeeService){}
  @Input() selectedID : string
  @Output() onUpdate: EventEmitter<string> =   new EventEmitter();
  @Output() onSuccess: EventEmitter<void> = new EventEmitter();
  data : LabourContractModel
  selectedDate: string
  selectedEmployeeID : string
  DataofEmployee : EmployeeModel[]


  ngOnInit(): void {
    this.GetLabourContractID()
    this.GetAllEmployee()
  }

  GetLabourContractID(){
    this.service.GetAllContractByID(this.selectedID).subscribe((res)=>{
      this.data = res
    })
  }

  GetAllEmployee(){
    this.employeeService.GetEmployee().subscribe((res)=>{
      this.DataofEmployee = res
    })
  }

  onEmployeeChange(){
    return this.selectedEmployeeID
  }

  onDateChange(event): void {
    this.selectedDate = event.target.value;
  }

  Add(data : LabourContractModel){
    console.log(data)
    this.service.CreateContract(data).subscribe((response)=>{
      if(response){
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


  Update(data : LabourContractModel){
      console.log(data)
      this.onUpdate.emit(this.selectedID)
      this.service.UpdateContract(this.selectedID,data).subscribe((response)=>{
        if(response){
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
