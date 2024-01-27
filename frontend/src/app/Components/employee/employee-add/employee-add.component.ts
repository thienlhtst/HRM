/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeModel } from 'src/Model/EmployeeModel';
import { EmployeeService } from 'src/Services/Employee/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent {
  constructor(private service : EmployeeService,private router : Router){}
  datas : EmployeeModel

  Add(data: EmployeeModel){

  }
}
