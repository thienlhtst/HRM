import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RankModel } from '../../Model/RankModel';
import { environment } from 'src/environments/environment';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { Pagingreponse } from 'src/Model/other/pagingreponse';

@Injectable()
export class RankServiceService {

constructor(private http : HttpClient) { }

  apiurl : string = environment.apiurl

  GetRank():Observable<RankModel[]>{
    return this.http.get<RankModel[]>(this.apiurl + '/Rank')
  }

  GetRankByID(id: string) :Observable<RankModel>{
    return this.http.get<RankModel>(this.apiurl +'/Rank/' + id)
  }


  GetRankPaging(paging : Requestpaging) : Observable<Pagingreponse>{
    if(paging.keyword !='')
    return this.http.get<Pagingreponse>(this.apiurl + '/Rank/paging?Keyword='+paging.keyword+'&PageIndex='+paging.pageindex+'&PageSize='+paging.pagesize+'')
    return this.http.get<Pagingreponse>(this.apiurl +'/Rank/paging?PageIndex='+paging.pageindex+'&PageSize='+paging.pagesize+'')
  }

  CreateRank(data : RankModel){
    return this.http.post(this.apiurl + '/Rank/createrank',data)
  }

  UpdateRank(id : string,data : RankModel){
    return this.http.put(this.apiurl +'/Rank/'+id,data)
  }

  DeleteRank(data:string){
    return this.http.delete(this.apiurl + '/Rank/'+ data)
  }
}
