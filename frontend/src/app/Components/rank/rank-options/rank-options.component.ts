
/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @angular-eslint/no-output-on-prefix */
import { RankModel } from 'src/Model/RankModel';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RankServiceService } from 'src/Services/Rank/RankService.service';
import { ConfirmationDialogService } from 'src/app/theme/shared/components/confirmation-dialog/confirmation-dialog.service';
import { RegexService } from 'src/Services/Regex/regex.service';

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
  id:string
  data : RankModel




  ngOnInit(): void {
    this.GetRankID()
  }

  GetRankID(){
    this.Service.GetRankByID(this.selectedID).subscribe((res)=>{
      this.data = res
    })
  }


  Add(data : RankModel){
    this.confirmService.confirm('Please Confirm','You wanna add ? ')
    .then((confirmed)=>{
      if(confirmed){
        this.Service.CreateRank(data).subscribe((res)=>{
          if(res){
            this.onConfirm.emit(res)
            this.confirmService.confirm('Success','Add Succeed')
            window.location.reload()
          }
          else {
            this.confirmService.confirm('Fail','Add Failed')
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
              this.confirmService.confirm('Success','Update Succeed')
              window.location.reload()
            }

        })
      }
    })

  }
}
