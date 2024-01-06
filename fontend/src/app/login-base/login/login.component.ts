import { Component, OnInit } from '@angular/core';
import { AllowanceService } from '../../../services/allowance.service';
import { Allowancemodel } from '../../../Model/allowancemodel';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
 
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
  console.log("asdasd")
  this.router.navigate(['/home']);

}
}
