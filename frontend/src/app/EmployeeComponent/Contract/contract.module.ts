/* eslint-disable @typescript-eslint/no-unused-vars */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContractViewComponent } from './contract-view/contract-view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TableComponent } from 'src/app/modules/shared/components/table/table.component';

const route : Routes=[{
  path:'',
  children:[
    { path:'',component: ContractViewComponent},

  ]
}]

@NgModule({
  declarations: [ContractViewComponent,TableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    HttpClientModule,
    FormsModule,
    MatTooltipModule
  ],
  exports:[]
})
export class ContractModule { }
