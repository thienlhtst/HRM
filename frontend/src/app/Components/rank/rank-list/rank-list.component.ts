/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { RankServiceService } from 'src/Services/Rank/RankService.service';
import { RankModel } from 'src/Model/RankModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rank-list',
  templateUrl: './rank-list.component.html',
  styleUrls: ['./rank-list.component.scss']
})
export class RankListComponent implements OnInit{
  constructor(private service : RankServiceService,private router : Router){}
  datas : RankModel[]

  ngOnInit(): void {
      this.GetAll()
  }

  ButtonClickToAdd(){
    this.router.navigate(['/rank/add'])
  }
  ButtonClickToUpdate(id : string){
    this.router.navigate(['/rank/',id])
  }

  Delete(event:any,id : string){
    if(confirm('Delete this data ?')){
      event.target.innertext('Deleting');
      this.service.DeleteRank(id).subscribe((res)=>{
        if(res){
          alert('Delete Success');
          this.GetAll();
        } else alert('Fail')
      })
    }
  }

  GetAll(){
    this.service.GetRank().subscribe((res)=>{
      this.datas = res
    })
  }
}
