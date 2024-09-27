import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeContractComponent } from './employee-contract.component';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from 'src/app/modules/share/components/table/table.component';
import { LabourContractServiceService } from 'src/Services/LabourContract/labour-contract-service.service';

const routes: Routes = [
  { path: '', component: EmployeeContractComponent },

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers : [LabourContractServiceService],
  declarations: [EmployeeContractComponent,TableComponent]
})
export class EmployeeContractModule { }
