import { Component, OnInit } from '@angular/core';
import { EWAModel } from 'src/Model/EmployeeWithAllowance/EWAModel';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { EWAServiceService } from 'src/Services/EmployeeWithAllowance/ewaservice.service';

@Component({
  selector: 'app-ewa-list',
  templateUrl: './ewa-list.component.html',
  styleUrls: ['./ewa-list.component.scss']
})
export class EwaListComponent implements OnInit {
  constructor(private service : EWAServiceService){}
  paging : Requestpaging ={
    keyword :'',
    pageindex : 1,
    pagesize :10
  }
  PageCount : number = 1
  datas : EWAModel[]
  ShowFormAdd : boolean = false
  ShowForm : boolean = false


  ngOnInit(): void {
    this.getPaging()
  }

  getPaging(){
    this.service.getEWApaging(this.paging).subscribe((res)=>{
      this.datas = res.items
      this.PageCount = res.pageCount
    })
  }

  ClicktoShowFormAdd(): void{
    this.ShowFormAdd = !this.ShowFormAdd
    this.ShowForm =!this.ShowForm
  }
  OnSuccess(){
    this.ShowFormAdd = false
  }

  pagechange(page : number) : void{
    this.paging.pageindex = page
    this.getPaging()
  }
}
