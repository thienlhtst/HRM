import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Alert } from 'src/Model/Alert';
import { AuthService } from 'src/Services/Auth/auth.service';
import { SystemService } from 'src/Services/System/System.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   data:any[] = [];
   @ViewChild('usernameInput') usernameInput: ElementRef | undefined;
  FunctionID: any='login';
  alert: Alert | undefined;
  datasLanguage: any[] = [];
  loginForm!: FormGroup;
  message: any = '';
  flag: number = 0;
  LanguageFlag=false;
  constructor( private fb: FormBuilder, private authService: AuthService,private systemService: SystemService) { }

  ngOnInit() {
    this.data = [
      {
        id: 1,
        name: 'John'
      },
      
    ];
    this.loginForm = this.fb.group({
      account: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
    let lan = localStorage.getItem("language")
    if (lan == null) {
      lan = '0'
    }
  //  this.systemService.GetLangugeLayout(this.FunctionID, lan).subscribe((res) => {
  //     this.datasLanguage = res;
  //     this.LanguageFlag=true;
  //  });
    

  }
  onSubmit() {
    this.flag = 1;
    this.alert = {
      type: 'success',
      message: 'This is an success alert'
    };
    if (this.loginForm.valid) {
      let user=this.loginForm.value
      // this.authService.onLogin(user).subscribe((res) => {
      //   if (res == null) {
      //     this.message = true;
      //     this.alert = {
      //       type: 'danger',
      //       message: 'User or password wrong'
      //     };
      //     this.flag = 0;
      //     if (this.usernameInput) {
      //       this.usernameInput.nativeElement.focus();
      //     }
      //     console.log(res)
      //   }
      //   window.location.reload();
      //   this.flag = 0;
      // });
    } else {
      this.validateAllFormFileds(this.loginForm);
    }
  }
  flagchangeHandler(flagchange: boolean) {
    this.message = flagchange;
  }
  private validateAllFormFileds(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFileds(control);
      }
    });
  }
}
