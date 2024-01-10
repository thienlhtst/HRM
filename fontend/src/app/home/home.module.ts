import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeListComponent } from './home-list/home-list.component';
import { Routes, RouterModule,RouterOutlet } from '@angular/router';
import { HomeAddComponent } from './home-add/home-add.component';
import { ComponentsModule } from '../components/components.module';
import { EmployeeListComponent } from '../pages/employee-base/employee-list/employee-list.component';
import { EmployeeBaseModule } from '../pages/employee-base/employee-base.module';
import { LoginComponent } from '../login-base/login/login.component';

const routes: Routes=[
  {
    path:'',
    children:[
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {  path:'employee',component:EmployeeListComponent},
    
    ]
  },
]

@NgModule({
  declarations: [HomeListComponent,HomeAddComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    EmployeeBaseModule,
    RouterModule.forChild(routes),RouterOutlet
  ],
  exports:[HomeListComponent,HomeAddComponent
  ]
})
export class HomeModule { }
