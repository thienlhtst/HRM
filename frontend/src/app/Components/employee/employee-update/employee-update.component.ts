import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './../../../../Services/Employee/employee.service';
import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/Model/Employee/EmployeeModel';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit {
  constructor(private service : EmployeeService,private router : Router,private route : ActivatedRoute ){}
  id : string
  ngOnInit(): void {
    this.id = `${this.route.snapshot.paramMap.get('id')}`;
  }

  Update(employee : EmployeeModel){
    this.service.UpdateEmployee(this.id,employee).subscribe((res)=>{
      if(res)
      alert('Add Success')
      this.router.navigate(['/employee'])
    })
  }

}
