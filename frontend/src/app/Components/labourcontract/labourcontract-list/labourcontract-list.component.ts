/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { LabourContractModel } from 'src/Model/LabourContract/LabourContractModel';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { LabourContractServiceService } from 'src/Services/LabourContract/labour-contract-service.service';

@Component({
  selector: 'app-labourcontract-list',
  templateUrl: './labourcontract-list.component.html',
  styleUrls: ['./labourcontract-list.component.scss']
})
export class LabourcontractListComponent implements OnInit {
  constructor(private service : LabourContractServiceService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  datas : LabourContractModel[]
  ShowFormOption : boolean = false
  ShowForm : boolean = false
  selectedID : string
  spinner : boolean = false
  paging : Requestpaging = {
    keyword : '',
    pageindex : 1,
    pagesize : 10
  }
  PageCount : number = 1



  ClicktoShowFormAdd(): void{
    this.ShowFormOption = !this.ShowFormOption
    this.ShowForm =!this.ShowForm
    this.selectedID = ''
  }

  ButtonClickToUpdate(id : string){
    this.ShowFormOption =! this.ShowFormOption
    this.ShowForm =!this.ShowForm
    this.selectedID = id

  }

  OnSuccess(){
    this.ShowFormOption = false
  }

  Delete(event:any,id : string){
    if(confirm('Delete this data ?')){
      this.service.DeleteContract(id).subscribe((res)=>{
        if(res){
          alert('Delete Success');
          this.GetPaging();
        } else{
          alert('Fail')
          this.GetPaging();
        }
      })
    }
  }

  GetPaging(){
    this.service.GetAllContractPaging(this.paging).subscribe((res)=>{
      this.datas = res.items
      this.PageCount = res.pageCount
    })
  }

  PageChange(page : number): void{
    this.paging.pageindex = page
    this.GetPaging()
  }
}
