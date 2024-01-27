import { Allowancemodel } from './../../../../Model/AllowanceModel';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllowanceServiceService } from 'src/Services/Allowance/AllowanceService.service';

@Component({
  selector: 'app-allowance-add',
  templateUrl: './allowance-add.component.html',
  styleUrls: ['./allowance-add.component.scss']
})



export class AllowanceAddComponent {

  allo : Allowancemodel
  constructor(private service : AllowanceServiceService, private router : Router){}

  Add(data : Allowancemodel){

    this.service.CreateAllowance(data).subscribe((response)=>{
      if(response){
        alert("Add Success");
        this.router.navigate(['/allowance'])
      }
      else{
        alert("Fail")
      }

    })
  }

}
