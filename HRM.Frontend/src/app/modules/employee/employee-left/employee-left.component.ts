import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { EmployeeModel } from 'src/Model/Employee/EmployeeModel';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { TokenService } from 'src/Services/Token/token.service';

@Component({
  selector: 'app-employee-left',
  templateUrl: './employee-left.component.html',
  styleUrls: ['./employee-left.component.css']
})
export class EmployeeLeftComponent implements OnInit {
  constructor(private token : TokenService,private employeeservice : EmployeeService) { }
  ngOnInit() {
    this.getemployeebyid()
  } 
  data : EmployeeModel = {
    id: '',
    firstName: '',
    middleName: '',
    lastName: '',
    dob: "",
    sex: 0,
    cic: '',
    numberPhone: '',
    address: '',
    position: '',
    rank: '',
    account: '',
    password: '',
    active: 0,
    urlImage: '',
    email: ''
  }
  
  menuItem: any[] = [
      {     
        id : 1,
        title : 'Dashboard',
        icon : 'bi bi-person',  
        route :   'dashboard'  
      },
      {
        id : 2,
        title : 'Contract',
        icon : 'bi bi-archive-fill',  
        route : 'contract' 
      },
      {
        id : 3,
        title : 'Information',
        icon : 'bi bi-person',
        route : 'infor'
      },
    ]




    
  getemployeebyid(){
    this.employeeservice.GetEmployeebyID("E9A7AF53-8973-418A-AB30-0147AB4D937B").subscribe((res)=>{
      this.data = res
      this.data.dob = formatDate(this.data.dob,'MM/dd/yyyy',"en-US")
    })
  }
}
