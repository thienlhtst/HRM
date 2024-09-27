import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/Model/Employee/EmployeeModel';
import { ProfileInforModel } from 'src/Model/profile/profile-infor';
import { SalaryModel } from 'src/Model/SalaryModel';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { SalaryService } from 'src/Services/Salary/salary.service';
import { SystemService } from 'src/Services/System/System.service';
import { TokenService } from 'src/Services/Token/token.service';

@Component({
  selector: 'app-employee-infor',
  templateUrl: './employee-infor.component.html',
  styleUrls: ['./employee-infor.component.css']
})
export class EmployeeInforComponent implements OnInit {

  constructor(private systemservice : SystemService,
              private employeeservice : EmployeeService,
              private tokenService : TokenService,
              private salaryservice : SalaryService)
              {}
  data : any[] = []
  flag : boolean = false
  ngOnInit() {
    this.getdatabyfunctionID()
  }


  getdatabyfunctionID(){
    this.systemservice.GetNavLangugeFunction("PI000000",0).subscribe((res)=>{
      this.employeeservice.GetEmployeebyID("E9A7AF53-8973-418A-AB30-0147AB4D937B").subscribe((idres)=>{
        res.forEach(e => {
          e.sysList.forEach((a: { name: keyof EmployeeModel, value: any }) => {
            idres.dob = formatDate(idres.dob,'MM/dd/yyyy',"en-US")
            if(idres.hasOwnProperty(a.name)){
              a.value = idres[a.name]
              }
          })
          
          this.data.push(e)
      })
        

      this.flag = true
    
  })
  }

  )}
}
