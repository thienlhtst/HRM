/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @angular-eslint/no-output-on-prefix */
import { RankModel } from 'src/Model/Rank/RankModel';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RankServiceService } from 'src/Services/Rank/RankService.service';
import { ConfirmationDialogService } from 'src/app/theme/shared/components/confirmation-dialog/confirmation-dialog.service';
import { RegexService } from 'src/Services/Regex/regex.service';
import { Alert } from 'src/Model/Alert';
import { error } from 'console';
import { RankRoleModel } from 'src/Model/Rank/RankRoleModel';

@Component({
  selector: 'app-rank-options',
  templateUrl: './rank-options.component.html',
  styleUrls: ['./rank-options.component.scss']
})
export class RankOptionsComponent implements OnInit {
  constructor(private Service:RankServiceService,
              private router : Router,private route:ActivatedRoute,
              private regex : RegexService,
              private confirmService : ConfirmationDialogService
              ){}
  @Input() selectedID : string
  @Output() onUpdate: EventEmitter<string> =   new EventEmitter();
  @Output() onSuccess: EventEmitter<void> = new EventEmitter();
  @Output() onConfirm: EventEmitter<number> = new EventEmitter();
  @Output() onCancel: EventEmitter<boolean> = new EventEmitter();
  id:string
  data : any={
    iDrank:'',
    name:'',
    rankRoleID:'',

  }

  Action : string
  alert : Alert
  message : any
  RoleData : RankRoleModel[]
  selectedRole : string




  ngOnInit(): void {
    this.GetRankID()
    this.GetAllRole()
  }

  GetAllRole(){
    this.Service.getRole().subscribe((res)=>{
      this.RoleData = res
    })
  }

  OnRoleChange(){
    return this.selectedRole
  }

  SetAction (action : string){
    this.Action = action
  }

  GetRankID(){
    this.Service.GetRankByID(this.selectedID).subscribe((res)=>{
      this.data.iDrank =res.id
      this.data.name= res.name
      this.data.rankRoleID= res.nameRankRole
    })
  }


  Add(data : RankModel){
      this.alert = {
        type : 'success',
        message : 'This is a success alert'
      }
    this.confirmService.confirm('Please Confirm','You wanna add ? ')
    .then((confirmed)=>{
      if(confirmed){
        this.Service.CreateRank(data).subscribe({
          next:(res)=>{
            this.confirmService.confirm('Success', 'Add Succeed');
            this.onConfirm.emit(res)
          },
          error: (error)=>{
            this.message = true,
            this.alert.type = 'danger'
          }

        })
      }
    })


  }

  Update(allowance : RankModel){
      this.confirmService.confirm('Plese Confirm','You wanna update ? ')
      .then((confirmed)=>{
        if(confirmed){
          this.onUpdate.emit(this.selectedID)
          this.Service.UpdateRank(this.selectedID,allowance).subscribe((res)=>{
            if(res){
              this.onConfirm.emit(res)
            }

        })
      }
    })

  }

  onCanceled(){
    this.onCancel.emit(false)
  }
}
