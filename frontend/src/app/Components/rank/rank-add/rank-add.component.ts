/* eslint-disable @angular-eslint/no-output-on-prefix */
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RankModel } from 'src/Model/RankModel';
import { RankServiceService } from 'src/Services/Rank/RankService.service';

@Component({
  selector: 'app-rank-add',
  templateUrl: './rank-add.component.html',
  styleUrls: ['./rank-add.component.scss']
})
export class RankAddComponent {
  constructor(private service:RankServiceService,private router : Router){}
  @Output() onSuccess : EventEmitter<void> = new EventEmitter()

  Add(data:RankModel){
      this.service.CreateRank(data).subscribe((res)=>{
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
}
