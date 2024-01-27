import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ZXingScannerModule} from '@zxing/ngx-scanner'
import { EmployeeModel } from 'src/Model/EmployeeModel';
import { AuthService } from 'src/Services/auth.service';
@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
  standalone: true,
  imports : [ZXingScannerModule,CommonModule, RouterModule]
})
export default class QrcodeComponent {
  QrCodeResult : string = ''
  datas : EmployeeModel[]
  constructor(private service : AuthService) {}
  onCodeResult(result:string)
  {

    this.QrCodeResult = result
    this.service.GetInforToLogin(result).subscribe((res : EmployeeModel[])=>{
      this.datas = res
      console.log(this.datas)
    })
  }
}
