import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { SystemService } from 'src/Services/System/System.service';
import { TokenService } from 'src/Services/Token/token.service';

@Component({
  selector: 'app-employee-infor',
  templateUrl: './employee-infor.component.html',
  styleUrls: ['./employee-infor.component.css']
})
export class EmployeeInforComponent implements OnInit {

  constructor(private systemservice : SystemService, private employeeservice : EmployeeService,private tokenService : TokenService) { }
  data : any[] = []
  flag : boolean = false
  ngOnInit() {
    this.getdatabyfunctionID()
  }

  getdataofemployeebytoken(){
    this.employeeservice.GetEmployeebyID()
  }

  getdatabyfunctionID(){
    this.systemservice.GetNavLangugeFunction("PI000000",0).subscribe((res)=>{
      this.data = res
      this.flag = true
    })
  }

  
}
