import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {ZXingScannerModule} from '@zxing/ngx-scanner'
import { EmployeeModel } from 'src/Model/Employee/EmployeeModel';
import { AuthService } from 'src/Services/auth.service';
@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
  standalone: true,
  imports : [ZXingScannerModule,CommonModule, RouterModule]
})
export default class QrcodeComponent {
  datas : EmployeeModel[]
  constructor(private service : AuthService, private router : Router) {}
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
