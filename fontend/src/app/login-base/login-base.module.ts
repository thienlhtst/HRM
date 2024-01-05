import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { AllowanceService } from '../../services/allowance.service';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports:[LoginComponent],
  providers:[AllowanceService]
})
export class LoginBaseModule { }
