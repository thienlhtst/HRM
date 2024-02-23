/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-mixed-spaces-and-tabs */

// angular import
import { Component, ElementRef, EventEmitter, Injectable, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/Services/auth.service';
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
import { AlertComponent } from 'src/app/theme/shared/components/alert/alert.component';
import { Alert } from 'src/Model/Alert';
import { emitKeypressEvents } from 'readline';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule,ReactiveFormsModule,HttpClientModule,ModalComponent,AlertComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthService,MdbModalService,ModalComponent]
})
@Injectable({
  providedIn: 'root',
})
export default class LoginComponent implements OnInit {

  @ViewChild('usernameInput') usernameInput: ElementRef;

  alert:Alert

  loginForm!: FormGroup;
  message: any='';
  flag: number=0
  constructor(private fb: FormBuilder,private authService:AuthService ) {

  constructor(private fb: FormBuilder,private authService:AuthService,private renderer: Renderer2 ) {

  }

  // eslint-disable-next-line @angular-eslint/contextual-lifecycle
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      account: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.alert={
      type: 'success',
		message: 'This is an success alert',
	  }

    this.message=true
    this.flag=1

    if (this.loginForm.valid) {
      this.flag=1

      this.authService.onLogin(this.loginForm.value).subscribe({
        next: (a) => {
          if(a==null){this.message=true,this.alert.type='success',this.message='asdasdsad'}
           this.flag=0 },

          if(a==null){
            this.message=true,this.alert.type='danger',this.alert.message='User or password wrong'
            this.renderer.selectRootElement('#usernameInput').focus();

          }

          ;
           },

     });


   } else {
    this.flag=0
      this.validateAllFormFileds(this.loginForm)
    }
    this.flag=0
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
