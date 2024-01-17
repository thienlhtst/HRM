import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/Model/EmployeeModel';
import { EmployeeService } from 'src/Services/Employee/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  constructor(private service : EmployeeService){}
  datas : EmployeeModel[];
  ngOnInit(): void {
    this.GetAll();
  }

  GetAll(){
    this.service.GetEmployee().subscribe((res)=>{
      this.datas =res;
    })
  }
}
