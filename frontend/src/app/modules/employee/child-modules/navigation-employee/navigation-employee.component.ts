
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EmployeeModel } from 'src/Model/Employee/EmployeeModel';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { TokenService } from 'src/Services/Token/token.service';

@Component({
  selector: 'app-navigation-employee',
  templateUrl: './navigation-employee.component.html',
  styleUrls: ['./navigation-employee.component.scss']
})
export class NavigationEmployeeComponent implements OnInit {
  constructor(private token : TokenService,private employeeserivice : EmployeeService,private router : Router ){}
  idofEmployee : string
  id : string = ''
  dataofEmployee : EmployeeModel
  ngOnInit(): void {
    this.id = '1'
    this.idofEmployee = this.token.getTokenId()
    this.getEmployeeByID()
  }
  menuItem : any[] = [
    {
      id:'1',
      title : 'Profile',
      icon : 'fa-brands fa-facebook-messenger',
      route : '/profile',
    }
    ,
    {
      id : '2',
      title : 'Contract',
      icon : 'fa-brands fa-facebook-messenger',
      route : '/contract',
    },
    {
      id : '3',
      title : 'WorkHour',
      icon : 'fa-brands fa-facebook-messenger',
      route : '/employeeworkhour',
    }
  ]


  getEmployeeByID(){
    this.employeeserivice.GetEmployeebyID(this.idofEmployee).subscribe((res)=>{
      this.dataofEmployee = res
    })
  }

  ButtontoRoute(router : string){
    this.router.navigate([router])
  }

  RandomColor(){
    
  }



}
