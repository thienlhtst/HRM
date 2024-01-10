import { Component, OnInit } from '@angular/core';
import { AllowanceService } from '../../../services/allowance.service';
import { Allowancemodel } from '../../../Model/allowancemodel';
import { Router, RouterLink ,ActivatedRoute} from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[CommonModule,
    HttpClientModule,RouterLink,ComponentsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  a: Allowancemodel={
    id:"3",
    name:"dcmmmmnr",
    money:30000,
 }
constructor(private share:AllowanceService,private route:ActivatedRoute,private router:Router){
}
ngOnInit(): void {
    
}

testclick(){
  this.router.navigate(['/'],{ relativeTo: this.route });

}
}
