import { Component } from '@angular/core';
import { AuthService } from 'src/Services/auth.service';
import { TokenService } from 'src/Services/token.service';
import { environment } from 'src/environments/environment';

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
  constructor( private tokenService: TokenService,private auth:AuthService){
    this.isAuthenticated$ = this.tokenService.isAuthentication;
  this.name= this.tokenService.getToken();
  }
  handleclick(event:any){
    if(event =='logout')
    this.auth.onLogout()
  }


}
