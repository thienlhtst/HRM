import { EWAServiceService } from './../../../../Services/EmployeeWithAllowance/ewaservice.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {ZXingScannerModule} from '@zxing/ngx-scanner'
import { Allowancemodel } from 'src/Model/AllowanceModel';
import { EmployeeModel } from 'src/Model/Employee/EmployeeModel';
import { GeneralService } from 'src/Services/General/general.service';
import { AuthService } from 'src/Services/auth.service';
@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
  standalone: true,
  imports : [ZXingScannerModule,CommonModule, RouterModule]
})
export default class QrcodeComponent implements OnInit {
  datas : EmployeeModel[]
  DataofAllowance : Allowancemodel[]
  constructor(private service : AuthService,private generalService : GeneralService,private ewaSerivce: EWAServiceService, private router : Router) {}

  ngOnInit(): void {
    this.getAllAllowance()
  }

  getAllAllowance(){
    this.generalService.GetAllowance().subscribe((res)=>{
      this.DataofAllowance = res
    })
  }

  onCodeResult(result:string)
  {
    this.service.GetInforToLogin(result).subscribe((res)=>{
      this.datas = res
      if(this.datas){
        alert('Success')
        this.router.navigate(['http://localhost:4200/'])
      }
      else{
        alert('Fail')
        this.router.navigate(['http://localhost:4200/login'])
      }
    })
  }
}
