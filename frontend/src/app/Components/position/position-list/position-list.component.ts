/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PositionModel } from 'src/Model/PositionModel';
import { PositionServiceService } from 'src/Services/Position/PositionService.service';

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.scss']
})
export class PositionListComponent implements OnInit{
  constructor(private service : PositionServiceService,private router : Router){}
  datas : PositionModel[]

  ngOnInit(): void {
    this.getAll();
  }

  ButtonClickToAdd(){
    this.router.navigate(['/position/add'])
  }

  ButtonClickToUpdate(id:string){
    this.router.navigate(['/position/update/',id])
  }


  getAll(){
    this.service.GetPosition().subscribe((res)=>{
      this.datas = res
    })
  }

  Delete(event : any, id : string){
    if(confirm('Delete this Data ?')){
      event.target.innertext="Deleting";
      this.service.DeletePosition(id).subscribe((res)=>{
        if(res){
          alert('Delete Success');
          this.getAll();
        }
        else alert('Fail');
      })
    }
  }
}
