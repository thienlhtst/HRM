import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PositionModel } from 'src/Model/PositionModel';
import { PositionServiceService } from 'src/Services/Position/PositionService.service';

@Component({
  selector: 'app-position-update',
  templateUrl: './position-update.component.html',
  styleUrls: ['./position-update.component.scss']
})
export class PositionUpdateComponent implements OnInit {
  constructor(private Service:PositionServiceService,private router : Router,private route:ActivatedRoute){}
  id:string


  ngOnInit(): void {
      this.id = `${this.route.snapshot.paramMap.get('id')}`;
  }

  Update(position : PositionModel){
    this.Service.UpdatePosition(this.id,position).subscribe((res)=>{
      if(res){
        alert('Update Success');
        this.router.navigate(['/position'])
      }
      else alert ('Fail')
    })
  }

}
