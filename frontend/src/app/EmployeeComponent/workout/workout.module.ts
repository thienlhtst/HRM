/* eslint-disable @typescript-eslint/no-unused-vars */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutViewComponent } from './workout-view/workout-view.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const route : Routes=[{
  path:'',
  children:[
    { path:'',component: WorkoutViewComponent},

  ]
}]

@NgModule({
  declarations: [
    WorkoutViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    HttpClientModule,
  ]
})
export class WorkoutModule { }
