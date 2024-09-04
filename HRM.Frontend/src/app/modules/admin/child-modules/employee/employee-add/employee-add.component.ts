import { EmployeeCreateModel } from 'src/Model/Employee/EmployeeCreateModel';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  Datas:any[]=[
    {
      FunctionID:1,
      label:'Basic Information',
      Icon:'fas fa-user',
      detail_items:[
        {
          FunctionID:1,
          label:'',
          datasLanguage:[
            {
              FunctionID:1,
              label:'First Name',
              kindSystem:2
            },
            {
              FunctionID:2,
              label:'Enter your first name',
              kindInput:1,
              kindSystem:3
            },
          ]
        },
        {
          FunctionID:2,
          label:'',
          datasLanguage:[
            {
              FunctionID:1,
              label:'First Name',
              kindSystem:2
            },
            {
              FunctionID:2,
              label:'Enter your first name',
              kindInput:1,
              kindSystem:3
            },
          ]
        }
        ,{
          FunctionID:4-1,
          label:'',
          datasLanguage:[
            {
              FunctionID:1,
              label:'First Name',
              kindSystem:2
            },
            {
              FunctionID:2,
              label:'Enter your first name',
              kindInput:1,
              kindSystem:3
            },
          ]
        },
        {
          FunctionId:4,
          label:'',
          datasLanguage:[
            {
              FunctionID:1,
              label:'First Name',
              kindSystem:2
            },
            {
              FunctionID:2,
              label:'Enter your first name',
              kindInput:1,
              kindSystem:3
            },
          ]
        }
      ]

    },


  ]
messageRequest: string='';
datasLanguage: any =[];
  constructor(private service : EmployeeService,
    private router : Router,
    private generalService : GeneralService,
    private confirm : ConfirmationDialogService
    ){}
    selectedFile: File | null = null;
    imagePreview: string | ArrayBuffer | null = null;
    
  @ViewChild(NotificationComponent) childnoti:NotificationComponent | undefined

  separateData(array:any[]):any[][]{
    const result: any[][] = [];

    for (let i = 0; i < array.length; i += 3) {
      const chunk = array.slice(i, i + 3);
      result.push(chunk);
    }
  
      return result;
  }
  findDataLanguage(data:any,kindSystem:any):any{
    return data.find((x:any)=>x.kindSystem == kindSystem)
  }


  ngOnInit(): void {
    this.Datas.forEach((element)=>{
      const data = this.separateData(element.detail_items)
      element.detail_items =data
    })
  console.log(this.Datas)
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
