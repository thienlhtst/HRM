/* eslint-disable @typescript-eslint/no-unused-vars */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { NavBarModule } from '../admin/nav-bar/nav-bar.module';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:EmployeeComponent,
    children:[
      {
        path:'home',
        loadChildren:() => import('../../../EmployeeComponent/profile/profile.module').then(m=>m.ProfileModule)


      },
      {
        path:'',
        redirectTo : 'home',
        pathMatch: 'full'
      }


    ]
  }
]

@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    NavBarModule,
    BrowserModule,

  ]
})
export class EmployeeModule { }
