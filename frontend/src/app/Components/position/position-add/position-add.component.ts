/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PositionModel } from 'src/Model/PositionModel';
import { PositionServiceService } from 'src/Services/Position/PositionService.service';

@Component({
  selector: 'app-position-add',
  templateUrl: './position-add.component.html',
  styleUrls: ['./position-add.component.scss']
})
export class PositionAddComponent {
  constructor(private service:PositionServiceService,private router : Router){}
  datas: PositionModel

  Add(data:PositionModel){
      this.service.CreatePosition(data).subscribe((res)=>{
        if(res){
          alert('Add Success')
          this.router.navigate(['/position'])
        }
        else{
          alert('Fail')
        }
      })
  }
}
