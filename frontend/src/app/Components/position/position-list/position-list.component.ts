import { Component, OnInit } from '@angular/core';
import { PositionModel } from 'src/Model/PositionModel';
import { PositionServiceService } from 'src/Service/Position/PositionService.service';

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.scss']
})
export class PositionListComponent implements OnInit{
  constructor(private service : PositionServiceService){}
  datas : PositionModel[]

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.GetPosition().subscribe((res)=>{
      this.datas = res
    })
  }
}
