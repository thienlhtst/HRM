
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PositionModel } from '../../Model/PositionModel';
import { environment } from 'src/environments/environment';

@Injectable()
export class PositionServiceService {

constructor(private http : HttpClient) {}
      ApiUrl : string = environment.ApiUrl


      GetPosition(): Observable<PositionModel[]>{
        return this.http.get<PositionModel[]>(this.ApiUrl + '/Position')
      }

      CreatePosition(data : PositionModel){
        return this.http.post(this.ApiUrl + '/Position/createposition',data)
      }

      UpdatePosition(data: PositionModel){
        return this.http.put(this.ApiUrl + '/Position/'+data.iDposition,data)
      }

      DeletePosition(data : number){
        return this.http.delete(this.ApiUrl + '/Position/' + data)
      }
}



