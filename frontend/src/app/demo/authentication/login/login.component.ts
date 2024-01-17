
// angular import
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/Services/auth.service';
import {ZXingScannerModule} from '@zxing/ngx-scanner'
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule,ReactiveFormsModule,HttpClientModule,ZXingScannerModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthService]
})
export default class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  message: unknown='';
  flag: number=0
  QrCodeResult : string = ''
  constructor(private fb: FormBuilder,private authService:AuthService ) {}

  onCodeResult(result:string)
  {
    this.QrCodeResult = result
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      account: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {

    this.flag=1
    if (this.loginForm.valid) {

      this.authService.onLogin(this.loginForm.value).subscribe({
        next: (a) => {this.message=a, this.flag=0 },
     });
   } else {
    this.flag=0
      this.validateAllFormFileds(this.loginForm)
    }

  }
  private validateAllFormFileds(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(field=>{
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true})
      }else if (control instanceof FormGroup){
        this.validateAllFormFileds(control)
      }
    })
  }
}
