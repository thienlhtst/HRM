import { Component, OnInit } from '@angular/core';
import { AllowanceService } from '../../../services/allowance.service';
import { Allowancemodel } from '../../../Model/allowancemodel';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[CommonModule,
    HttpClientModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  a: Allowancemodel={
    id:"3",
    name:"dcmmmmnr",
    money:30000,
 }
constructor(private share:AllowanceService,private router:Router){
}
ngOnInit(): void {
    
}

testclick(){
  this.router.navigate(['']);

}
}
