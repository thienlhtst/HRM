/* eslint-disable @typescript-eslint/no-unused-vars */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';


const route : Routes=[{
  path:'',
  children:[
    { path:'',component: ProfileViewComponent},

  ]
}]


@NgModule({
  declarations: [
    ProfileViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    HttpClientModule,

    FormsModule,

    MatTooltipModule
  ]
})
export class ProfileModule { }
