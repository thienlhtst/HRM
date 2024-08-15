
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { EmployeeModel } from 'src/Model/Employee/EmployeeModel';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { TokenService } from 'src/Services/Token/token.service';

@Component({
  selector: 'app-navigation-employee',
  templateUrl: './navigation-employee.component.html',
  styleUrls: ['./navigation-employee.component.scss']
})
export class NavigationEmployeeComponent implements OnInit {
  route : string = environment.routeemployee

  constructor(private token : TokenService,private employeeserivice : EmployeeService,private router : Router ){}
  idofEmployee : string
  id : string = ''
  dataofEmployee : EmployeeModel
  ngOnInit(): void {
    this.id = '1'
    this.idofEmployee = this.token.getTokenId()
    this.getEmployeeByID()
  }
  date : string
  menuItem : any[] = [
    {
      id:'1',
      title : 'Profile',
      icon : 'fa-brands fa-facebook-messenger',
      route : this.route+'/profile',
    }
    ,
    {
      id : '2',
      title : 'Contract',
      icon : 'fa-brands fa-facebook-messenger',
      route :  this.route+'/contract',
    },
    {
      id : '3',
      title : 'WorkHour',
      icon : 'fa-brands fa-facebook-messenger',
      route :  this.route+'/employeeworkhour',
    },
    {
      id : '4',
      title : 'Chat',
      icon : 'fa-brands fa-facebook-messenger',
      route :  this.route+'/chat',
    }
  ]


  getEmployeeByID(){
    this.employeeserivice.GetEmployeebyID(this.idofEmployee).subscribe((res)=>{
      this.dataofEmployee = res
      this.date = this.dataofEmployee.dob.split('T')[0]
    })
  }

  ButtontoRoute(router : string){
    this.router.navigate([router])
  }

  RandomColor(){
    
  }



}
