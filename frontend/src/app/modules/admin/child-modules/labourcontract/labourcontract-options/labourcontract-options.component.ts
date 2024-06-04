import { DatePipe } from '@angular/common';
import { EmployeeModel } from 'src/Model/Employee/EmployeeModel';
import { OnInit } from '@angular/core';
/* eslint-disable @angular-eslint/no-output-on-prefix */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LabourContractModel } from 'src/Model/LabourContract/LabourContractModel';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { LabourContractServiceService } from 'src/Services/LabourContract/labour-contract-service.service';
import { ConfirmationDialogService } from '../../../../shared/components/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-labourcontract-options',
  templateUrl: './labourcontract-options.component.html',
  styleUrls: ['./labourcontract-options.component.scss']
})
export class LabourcontractOptionsComponent implements OnInit {
  constructor(
    private service: LabourContractServiceService,
    private employeeService: EmployeeService,
    private confirmationDialogService: ConfirmationDialogService,
    private datePipe: DatePipe
  ) {}
  @Input() selectedID: string;
  @Output() onUpdate: EventEmitter<string> = new EventEmitter();
  @Output() onSuccess: EventEmitter<any> = new EventEmitter();
  data: any = {
    id: '',
    employeeID: '',
    content: '',
    contractSigninDate: '2024-03-12',
    contractTerm: 0,
    active: 1
  };
  selectedDate: string;
  selectedEmployeeID: string;
  DataofEmployee: EmployeeModel[];

  ngOnInit(): void {
    if (this.selectedID != '') this.GetLabourContractID();
    this.GetAllEmployee();
  }

  GetLabourContractID() {
    this.service.GetAllContractByID(this.selectedID).subscribe((res) => {
      let date = new Date(res.contractSigninDate);
      res.contractSigninDate = this.datePipe.transform(date, 'yyyy-MM-dd');
      this.data = res;
    });
  }

  GetAllEmployee() {
    this.employeeService.GetEmployee().subscribe((res) => {
      this.DataofEmployee = res;
    });
  }

  onEmployeeChange() {
    return this.selectedEmployeeID;
  }

  onDateChange(event): void {
    this.selectedDate = event.target.value;
  }

  Add(data: any) {
    console.log(data)
    this.confirmationDialogService
      .confirm('Please confirm..', 'Do you really want to Add ?')
      .then((confirmed) => {
        if (confirmed)
          this.service.CreateContract(data).subscribe((response) => {
              this.onSuccess.emit(response);
         
            
          });
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  Update(data: any) {
    this.confirmationDialogService
    .confirm('Please confirm..', 'Do you really want to Edit ?')
    .then((confirmed) => {
      if (confirmed)
      this.service.UpdateContract(this.selectedID, data).subscribe((response) => {
          this.onSuccess.emit(response);
      });
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

    
  }
}
