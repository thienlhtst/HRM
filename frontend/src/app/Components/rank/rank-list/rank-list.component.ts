import { Component, OnInit } from '@angular/core';
import { RankServiceService } from 'src/Service/Rank/RankService.service';
import { RankModule } from '../rank.module';

@Component({
  selector: 'app-rank-list',
  templateUrl: './rank-list.component.html',
  styleUrls: ['./rank-list.component.scss']
})
export class RankListComponent implements OnInit{
  constructor(private service : RankServiceService){}
  datas : RankModule[]

  ngOnInit(): void {
      this.GetAll()
  }

  GetAll(){
    this.service.GetRank().subscribe((res)=>{
      this.datas = res
    })
  }
}
