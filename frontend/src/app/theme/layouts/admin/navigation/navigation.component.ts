import { OnInit } from '@angular/core';
// Angular import
import { Component, EventEmitter, Output } from '@angular/core';
import { EmployeeModel } from 'src/Model/Employee/EmployeeModel';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { TokenService } from 'src/Services/Token/token.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private tokenService : TokenService,private employeeService : EmployeeService){}
  ngOnInit(): void {
    this.IdofEmployee = this.tokenService.getTokenId()
    this.GetEmployee()
  }
  // public props
  @Output() NavCollapsedMob = new EventEmitter();
  windowWidth = window.innerWidth;
  IdofEmployee : string
  EmployeeData : EmployeeModel

  // public method
  navCollapseMob() {
    if (this.windowWidth < 1025) {
      this.NavCollapsedMob.emit();
    }
  }

  GetEmployee(){
    this.employeeService.GetEmployeebyID(this.IdofEmployee).subscribe((res)=>{
      this.EmployeeData = res
    })
  }
}
