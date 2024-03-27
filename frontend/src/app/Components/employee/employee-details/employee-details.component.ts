import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeModel } from 'src/Model/Employee/EmployeeModel';
import { EmployeeService } from 'src/Services/Employee/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  constructor(private service : EmployeeService,private activeRoute : ActivatedRoute){}
  data : EmployeeModel
  id :string
  blank : string = " "

  ngOnInit(): void {
    this.id = `${this.activeRoute.snapshot.paramMap.get('id')}`
    this.GetEmployeeByID()
  }

  GetEmployeeByID(){
    this.service.GetEmployeebyID(this.id).subscribe((res)=>{
      this.data = res
    })
  }
}
