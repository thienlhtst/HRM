import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ShareModule } from 'src/app/modules/share/share.module';
const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
    
  },
 
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShareModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
