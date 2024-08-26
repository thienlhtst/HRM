import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../share/share.module';
import {  HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from '../share/components/alert/alert.component';
const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: '',
    redirectTo:'login',
    pathMatch:'full',

  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShareModule,
    ReactiveFormsModule,
    AlertComponent
  ],
  
  declarations: [LoginComponent]
})
export class AuthenticationModule { }
