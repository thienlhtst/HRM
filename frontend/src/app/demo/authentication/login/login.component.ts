
// angular import
import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
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
import { ModalComponent } from 'src/app/theme/shared/components/modal/modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule,ReactiveFormsModule,HttpClientModule,ZXingScannerModule,ModalComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthService,MdbModalService,ModalComponent]
})
@Injectable({
  providedIn: 'root',
})
export default class LoginComponent implements OnInit {




  loginForm!: FormGroup;
  message: any='';
  flag: number=0
  constructor(private fb: FormBuilder,private authService:AuthService ) {
    
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      account: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  
  onSubmit() {
    this.message=true
    this.flag=1
    if (this.loginForm.valid) {

      this.authService.onLogin(this.loginForm.value).subscribe({
        next: (a) => {if(a==null)this.message=true , this.flag=0 },
        
     });
   } else {
    this.flag=0
      this.validateAllFormFileds(this.loginForm)
    }

  }
  flagchangeHandler(flagchange: boolean){
    this.message=flagchange
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
