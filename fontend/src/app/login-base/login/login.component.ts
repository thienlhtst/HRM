import { Component, OnInit } from '@angular/core';
import { AllowanceService } from '../../../services/allowance.service';
import { Allowancemodel } from '../../../Model/allowancemodel';
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
constructor(private share:AllowanceService){
}
ngOnInit(): void {
    
}
testclick(){
  this.share.createentity(this.a).subscribe({
    next:(a)=>{
      console.log(a);
    }
  })
}
}
