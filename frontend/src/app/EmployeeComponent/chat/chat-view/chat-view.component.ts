import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { EmployeeModel } from 'src/Model/Employee/EmployeeModel';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { TokenService } from 'src/Services/Token/token.service';


@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss']
})
export class ChatViewComponent implements OnInit {
  constructor(private employeeService : EmployeeService,private token : TokenService){}
  @Input() userchatwith : EventEmitter<EmployeeModel> = new EventEmitter<EmployeeModel>()

  IdofEmployee : string
  ListEmployeeActive : EmployeeModel[] = []
  DataOfEmployee : EmployeeModel
  ListOfEmployee : EmployeeModel[]
  paging : Requestpaging ={
    keyword: '',
    pageindex: 1,
    pagesize: 10
  }
  ngOnInit(): void {
    this.IdofEmployee = this.token.getTokenId()
    this.GetEmployeeActice()
  }

  GetEmployeeById(){
    this.employeeService.GetEmployeebyID(this.IdofEmployee).subscribe((res)=>{
      this.DataOfEmployee = res
    })
  }

  GetEmployeeActice(){
    this.employeeService.GetEmployeePaging(this.paging).subscribe((res)=>{
      this.ListOfEmployee = res.items
      for(var item of this.ListOfEmployee){
        if(item.active == 1){
          this.ListEmployeeActive.push(item)
        }
      }
      this.paging.pageindex =res.pageIndex
      this.paging.pagesize = res.pageSize
    })
  }
}
