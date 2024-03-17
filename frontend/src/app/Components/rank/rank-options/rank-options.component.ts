/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @angular-eslint/no-output-on-prefix */
import { RankModel } from 'src/Model/RankModel';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RankServiceService } from 'src/Services/Rank/RankService.service';

@Component({
  selector: 'app-rank-options',
  templateUrl: './rank-options.component.html',
  styleUrls: ['./rank-options.component.scss']
})
export class RankOptionsComponent implements OnInit {
  constructor(private Service:RankServiceService,private router : Router,private route:ActivatedRoute){}
  @Input() selectedID : string
  @Output() onUpdate: EventEmitter<string> =   new EventEmitter();
  @Output() onSuccess: EventEmitter<void> = new EventEmitter();
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

  Add(data:RankModel){
    this.Service.CreateRank(data).subscribe((res)=>{
      if(res){
        alert('Success')
        setTimeout(() => {
          this.onSuccess.emit()
        }, 5);
        window.location.reload()
      }
      else{
        alert('Fail')
        setTimeout(() => {
          this.onSuccess.emit()
        }, 5);
      }
    })
}

  Update(rank : RankModel){
    this.onUpdate.emit(this.selectedID)
    this.Service.UpdateRank(this.selectedID,rank).subscribe((res)=>{
      if(res){
        alert('Success')
          setTimeout(() => {
            this.onSuccess.emit()
          }, 5);
          this.router.navigate(['/rank'])
      }
      else{
        alert('Fail')
          setTimeout(() => {
            this.onSuccess.emit()
          }, 5);
        }
    })
  }
}
