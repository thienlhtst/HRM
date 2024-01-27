
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PositionModel } from '../../Model/PositionModel';
import { environment } from 'src/environments/environment';

@Injectable()
export class PositionServiceService {

constructor(private http : HttpClient) {}
      ApiUrl : string = environment.apiurl


      GetPosition(): Observable<PositionModel[]>{
        return this.http.get<PositionModel[]>(this.ApiUrl + '/Position')
      }

      CreatePosition(data : PositionModel){
        return this.http.post(this.ApiUrl + '/Position/createposition',data)
      }

      UpdatePosition(id : string,data: PositionModel){
        return this.http.put(this.ApiUrl + '/Position/'+id,data)
      }

      DeletePosition(id : string){
        return this.http.delete(this.ApiUrl + '/Position/' + id)
      }
}



