import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Allowancemodel } from 'src/Model/AllowanceModel';
import { AllowanceServiceService } from 'src/Services/Allowance/AllowanceService.service';

@Component({
  selector: 'app-allowance-update',
  templateUrl: './allowance-update.component.html',
  styleUrls: ['./allowance-update.component.scss']
})
export class AllowanceUpdateComponent implements OnInit {
  constructor(private service : AllowanceServiceService,private route : ActivatedRoute,private router : Router){}
  id : string

  ngOnInit(): void {
    this.id = `${this.route.snapshot.paramMap.get('id')}`;

  }

  Update(allowance : Allowancemodel){
      this.service.UpdateAllowance(this.id,allowance).subscribe((response)=>{
        if(response){
          alert("Update Success");
          this.router.navigate(['/allowance'])
        }
        else{
          alert("Fail")
        }

      })
  }
}
