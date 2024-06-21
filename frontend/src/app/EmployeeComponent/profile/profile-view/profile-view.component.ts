import { GeneralService } from 'src/Services/General/general.service';
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/Model/Employee/EmployeeModel';
import { SalaryModel } from 'src/Model/SalaryModel';
import { SalaryModelList } from 'src/Model/SalaryModelList';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { SalaryService } from 'src/Services/Salary/salary.service';
import { TokenService } from 'src/Services/Token/token.service';
import { EmployeeModelHasSalary } from 'src/Model/Employee/EmployeeModelHasSalary';
import { Pagingreponse } from 'src/Model/other/pagingreponse';
import { Requestpaging } from 'src/Model/other/requestpaging';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  constructor(private tokenService : TokenService,private employeeService : EmployeeService,private GeneralService : GeneralService,private salaryservice : SalaryService){}
  ngOnInit(): void {
    this.IdOfthisEmployee = this.tokenService.getTokenId()
    this.GetEmployee()
    this.GetListEmployee()
  }
  EmployeeData : EmployeeModel
  SalaryData : SalaryModelList[]
  EmployeeListData : EmployeeModelHasSalary[]
  selectedEmployee : EmployeeModel
  money : number
  IdOfthisEmployee : string
  ListofEmployee : EmployeeModel[]
  ListActiveEmployee : EmployeeModel[] = []

  paging : Requestpaging ={
    keyword: '',
    pageindex: 1,
    pagesize: 10
  }


  GetEmployee(){
    this.employeeService.GetEmployeebyID(this.IdOfthisEmployee).subscribe((res)=>{
      this.EmployeeData = res
    })

  }

  GetListEmployee(){
    this.employeeService.GetEmployeePaging(this.paging).subscribe((res)=>{
      this.ListofEmployee = res.items
      this.paging.pageindex = res.pageIndex
      this.paging.pagesize = res.pageSize

      for(const item of this.ListofEmployee){
        if(item.active == 1){
          this.ListActiveEmployee.push(item)
        }
      }
    })
  }

  onMessengerCLick(data : EmployeeModel){
    this.selectedEmployee = data
  }


  ButtonToGetSalary(){
    this.GeneralService.GetSalary().subscribe((ressalary)=>{
      this.SalaryData = ressalary
    this.employeeService.GetEmployeeHasSalary().subscribe((resemployee)=>{
      for(const employee of resemployee){
          if(employee.id == this.EmployeeData.id){
            for(const salary of this.SalaryData){
              if(employee.salaryID == salary.id){
                this.money = salary.money
              }
            }
          }


      }
    })

    })




  }

  messages: { user: string, text: string }[] = [];
  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ user: 'You', text: this.newMessage });
      this.newMessage = '';
      this.scrollToBottom();
    }
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }

  scrollToBottom() {
    try {
      const chatBox = document.getElementById('chatBox');
      chatBox.scrollTop = chatBox.scrollHeight;
    } catch (err) {
      console.error(err);
    }
  }
}


