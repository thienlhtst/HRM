import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { TokenService } from 'src/Services/Token/token.service';

@Component({
  selector: 'app-avt',
  templateUrl: './avt.component.html',
  styleUrls: ['./avt.component.scss']
})
export class AvtComponent implements OnInit {
  constructor(private employeeservice : EmployeeService,private token : TokenService){}
  @Input() borderimg : string = "0px"
  idofEmployee : string | undefined
  nameavt : string | undefined
  avt : string = "assets/images/user/avatar-2.jpg"
  flag : boolean | undefined
  ngOnInit(): void {
    this.idofEmployee = this.token.getTokenId()!
    this.getEmployee()

  }

  getEmployee(){
    if(this.idofEmployee){
      this.employeeservice.GetEmployeebyID(this.idofEmployee).subscribe((res)=>{
        if(!res.urlImage){
          this.flag = false
          this.nameavt = res.firstName.charAt(0) + res.lastName.charAt(0)
        }
        else
        {
          this.flag = true
          this.nameavt = res.urlImage
        }

      })
    }


  }



}
