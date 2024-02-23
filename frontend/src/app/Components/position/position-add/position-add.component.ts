/* eslint-disable @angular-eslint/no-output-on-prefix */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() onSuccess : EventEmitter<void> = new EventEmitter()
  datas: PositionModel

  Add(data:PositionModel){
    this.service.CreatePosition(data).subscribe((res)=>{
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
