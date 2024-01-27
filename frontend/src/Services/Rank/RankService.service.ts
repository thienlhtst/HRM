import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RankModel } from '../../Model/RankModel';
import { environment } from 'src/environments/environment';

@Injectable()
export class RankServiceService {

constructor(private http : HttpClient) { }
  apiurl : string = environment.apiurl

  GetRank():Observable<RankModel[]>{
    return this.http.get<RankModel[]>(this.apiurl + '/Rank')
  }

  CreateRank(data : RankModel){
    return this.http.post(this.apiurl + '/Rank/createrank',data)
  }

  UpdateRank(data : RankModel){
    return this.http.put(this.apiurl +'/Rank/'+data.idrank,data)
  }

  DeleteRank(data:string){
    return this.http.delete(this.apiurl + '/Rank/'+ data)
  }
}
