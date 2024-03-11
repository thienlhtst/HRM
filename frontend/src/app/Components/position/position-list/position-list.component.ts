/* eslint-disable no-empty */
import { OnChanges, SimpleChanges, ViewChild } from '@angular/core';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PositionModel } from 'src/Model/PositionModel';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { PositionServiceService } from 'src/Services/Position/PositionService.service';
import { PagingnavComponent } from 'src/app/theme/shared/components/pagingnav/pagingnav.component';

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.scss','../../../../scss/shared/sreach.scss']
})
export class PositionListComponent implements OnInit,OnChanges{
  constructor(private service : PositionServiceService,private router : Router){}
  @ViewChild(PagingnavComponent) child : PagingnavComponent
  datas : PositionModel[]
  searchText : any
  paging : Requestpaging={
    keyword : '',
    pageindex : 1,
    pagesize : 10
  }
  ShowFormAdd : boolean = false
  ShowFormUpdate : boolean = false
  ShowForm : boolean = false
  selectedID : string
  PageCount : number = 1
  spinner : boolean = false
  ngOnInit(): void {
    this.GetPaging();

  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['datas']){

    }
  }


  ClicktoShowFormAdd(): void{
    this.ShowFormAdd = !this.ShowFormAdd
    this.ShowForm =!this.ShowForm
  }

  ButtonClickToUpdate(id : string){
    this.ShowFormUpdate =! this.ShowFormUpdate
    this.ShowForm =!this.ShowForm
    this.selectedID = id
  }



  OnSuccess(){
    this.ShowFormUpdate = false
    this.ShowFormAdd = false
  }




  GetPaging(){
    this.service.GetPositionPaging(this.paging).subscribe((res)=>{
      this.datas = res.items
      this.PageCount = res.pageCount
      this.spinner = true
    })
  }

  Delete(event : any, id : string){
    if(confirm('Delete this Data ?')){
      this.service.DeletePosition(id).subscribe((res)=>{
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

  PageChange(page : number):void{
    this.paging.pageindex = page
    this.GetPaging()
  }
}
