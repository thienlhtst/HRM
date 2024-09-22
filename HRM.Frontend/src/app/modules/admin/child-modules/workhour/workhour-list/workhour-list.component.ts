/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkHourModel } from 'src/Model/Relationship/WorkHourModel';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { NotificationService } from 'src/Services/Shared/Notification.service';
import { WorkHourService } from 'src/Services/WorkHour/WorkHour.service';
import { NotificationComponent } from 'src/app/modules/share/components/Notification/Notification.component';

@Component({
  selector: 'app-workhour',
  templateUrl: './workhour-list.component.html',
  styleUrls: ['./workhour-list.component.scss']
})
export class WorkhourListComponent implements OnInit{
  searchText:any
  message:string=''
  messageerr:string=''
  flagspiner:boolean=false
  @ViewChild(NotificationComponent) child: NotificationComponent | undefined;

  constructor(private service : WorkHourService,private router: Router,private route: ActivatedRoute, private nofis: NotificationService){

  }
  requestpaing:Requestpaging={
    keyword: '',
    pageindex:1,
    pagesize:10,
  }
  datas : WorkHourModel[]=[]
  pageCount:number=1
  listitems:any[] =[]
  ngOnInit(): void {
     this.GetAllpaging()
    setTimeout(() => {
      if( this.nofis.Getflag()=='1')
      this.onConfirm(1)
      this.nofis.Removeflag()
    }, 1);
  }
  GetAllpaging(){
    this.listitems=[]
    this.flagspiner=false
    this.service.GetWorkHourPaging(this.requestpaing).subscribe( {next:(res)=>{

      this.listitems=res.items
      this.pageCount = res.pageCount
      this.flagspiner=true
      
    },
    error:(err)=>{
      this.flagspiner=true
      this.messageerr='errorrrr'
    },
     
  }
    
    )

  }
  numberchange(numberchange:number):void{
    this.requestpaing.pageindex = numberchange
    this.GetAllpaging()
  }
  nagivativeAdd(){
    this.router.navigate(['/workhour/addoredit'])

  }
   onConfirm(flag: any) {
    if (flag == 1) {
      this.message = 'success';
      if(this.child!=undefined && this.child.successTpl)
      this.child.showSuccess(this.child.successTpl);
      this.GetAllpaging()
    } else {
      this.message = 'faill';
      if(this.child!=undefined && this.child.dangerTpl)
      this.child.showDanger(this.child.dangerTpl);
    }
  }
  EventChooseId(request:any){
    if(request.flag==1){
      this.router.navigate(['/workhour/addoredit',request.id])
    }else{
      this.service.DeleteWorkhour(request.id).subscribe((res)=>{
        this.onConfirm(res)
      })
    }
  }
  onSearchChange(){
    this.requestpaing.keyword=this.searchText
    this.GetAllpaging()
  }
}
