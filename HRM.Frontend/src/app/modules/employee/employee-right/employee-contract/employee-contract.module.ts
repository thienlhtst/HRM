import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeContractComponent } from './employee-contract.component';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from 'src/app/modules/share/components/table/table.component';

const routes: Routes = [
  { path: '', component: EmployeeContractComponent },

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [EmployeeContractComponent,TableComponent]
})
export class EmployeeContractModule { }
