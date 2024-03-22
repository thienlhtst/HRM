/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { AuthService } from 'src/Services/Auth/auth.service';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { TokenService } from 'src/Services/Token/token.service';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss']
})
export class NavRightComponent {
  // public method
  profile = [
    {
      icon: 'ti ti-edit-circle',
      title: 'Edit Profile',
      event:'asd'
    },
    {
      icon: 'ti ti-user',
      title: 'View Profile',
      event:'asd'
    },
    {
      icon: 'ti ti-clipboard',
      title: 'Social Profile',
      event:'asd'
    },
    {
      icon: 'ti ti-edit-circle',
      title: 'Billing',
      event:'asd'
    },
    {
      icon: 'ti ti-power',
      title: 'Logout',
      event:'logout'
    }
  ];

  setting = [
    {
      icon: 'ti ti-help',
      title: 'Support'
    },
    {
      icon: 'ti ti-user',
      title: 'Account Settings'
    },
    {
      icon: 'ti ti-lock',
      title: 'Privacy Center'
    },
    {
      icon: 'ti ti-messages',
      title: 'Feedback'
    },
    {
      icon: 'ti ti-list',
      title: 'History'
    }
  ];
  isAuthenticated$;
  name:string=''
  rank : string =''
  constructor( private tokenService: TokenService,private auth:AuthService,private employeeSerivce : EmployeeService){
    this.isAuthenticated$ = this.tokenService.isAuthentication;
    this.employeeSerivce.GetEmployeebyID(this.tokenService.getTokenId()).subscribe((res)=>{
      this.name = res.lastName
      this.rank = res.rank
    })

  }
  handleclick(event:any){
    if(event =='logout')
    this.auth.onLogout()
  }


}
