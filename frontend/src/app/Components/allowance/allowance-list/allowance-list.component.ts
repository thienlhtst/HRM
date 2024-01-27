/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Allowancemodel } from 'src/Model/AllowanceModel';
import { AllowanceServiceService } from 'src/Services/Allowance/AllowanceService.service';
import { NotificationComponent } from 'src/app/theme/shared/components/Notification/Notification.component';
import { PagingnavComponent } from 'src/app/theme/shared/components/pagingnav/pagingnav.component';


@Component({
  selector: 'app-allowance-list',
  templateUrl: './allowance-list.component.html',
  styleUrls: ['./allowance-list.component.scss']
})



export class AllowanceListComponent implements OnInit  {
  constructor(private service : AllowanceServiceService, private router : Router){}
  datas:Allowancemodel[];
  pageindex:number =1;
  messagerequest:string=''
  searchText : any

  @ViewChild(PagingnavComponent) child: PagingnavComponent;
  @ViewChild(NotificationComponent) childnoti: NotificationComponent;

  ngOnInit(): void{
    this.GetAll();

  }
  testclick(){
    this.messagerequest= "test thu xem"
    this.childnoti.showSuccess(this.childnoti.successTpl)
  }
  GetAll(){
    this.service.getAllowance().subscribe((res)=>{
      this.datas = res

    })
  }

  ButtonClickToAdd(){
    this.router.navigate(['/allowance/add'])
  }
  ButtonClickToUpdate(id : string){
    this.router.navigate(['/allowance/update',id])
  }

  Delete(event : any,id:string){
      if(confirm(' Delete this data ? ')){
        event.target.innertext="Deleting";
        this.service.DeleteAllowance(id).subscribe((res)=>{
          if(res){
            alert('Delete Success');
            this.GetAll()
          }
          else alert('Fail')
        })


      }
  }

  buttonStyle = {
    background: 'none',
    border: 'none',
    padding: '5',
    width: '50px', // Đặt chiều rộng mong muốn
    height: 'auto', // Đặt chiều cao tự động hoặc bạn có thể đặt giá trị cụ thể
  };


}
