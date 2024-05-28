/* eslint-disable @typescript-eslint/no-unused-vars */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContractViewComponent } from './contract-view/contract-view.component';
import { HttpClientModule } from '@angular/common/http';

const route : Routes=[{
  path:'',
  children:[
    { path:'',component: ContractViewComponent},

  ]
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    HttpClientModule,
  ]
})
export class ContractModule { }
