import { EmployeeCreateModel } from 'src/Model/Employee/EmployeeCreateModel';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PositionModel } from 'src/Model/PositionModel';
import { RankModel } from 'src/Model/Rank/RankModel';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { GeneralService } from 'src/Services/General/general.service';
import { map } from 'rxjs/operators';
import { SalaryModel } from 'src/Model/SalaryModel';
import { EmployeeModel } from 'src/Model/Employee/EmployeeModel';
import { SalaryModelList } from 'src/Model/SalaryModelList';
import { Alert } from 'src/Model/Alert';
import { ConfirmationDialogService } from 'src/app/modules/share/components/confirmation-dialog/confirmation-dialog.service';
import { NotificationComponent } from 'src/app/modules/share/components/Notification/Notification.component';
import { SystemService } from 'src/Services/System/System.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  flagAppear:boolean = false;
messageRequest: string='';
datasLanguage: any =[];
testselectedOption: number | null = null;

  constructor(private service : EmployeeService,
    private router : Router,
    private _systemService: SystemService,
    private generalService : GeneralService,
    private confirm : ConfirmationDialogService,private route : ActivatedRoute
    ){}
    selectedFile: File | null = null;
    imagePreview: string | ArrayBuffer | null = null;
    
  @ViewChild(NotificationComponent) childnoti:NotificationComponent | undefined
  ngOnInit(): void {
    let lan = localStorage.getItem("language")
    if (lan == null) {
      lan = '0'
    }
    
    this._systemService.GetNavLangugeFunction('CE000000', lan).subscribe((res) => {
     this.datasLanguage = res;
     this.flagAppear = true;
    });
  }
  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
  OnSubmit(arg0: any) {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);
      console.log(formData.getAll('image'));
    }
  }
}
