/* eslint-disable @typescript-eslint/no-explicit-any */
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RankModel } from '../../Model/Rank/RankModel';
import { environment } from 'src/environments/environment';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { Pagingreponse } from 'src/Model/other/pagingreponse';
import { RankRoleModel } from 'src/Model/Rank/RankRoleModel';

@Injectable()
export class RankServiceService {

constructor(private http : HttpClient) { }

  apiurl : string = environment.apiurl

  GetRank():Observable<RankModel[]>{
    return this.http.get<RankModel[]>(this.apiurl + '/Level')
  }
  getRole() : Observable<RankRoleModel[]>{
    return this.http.get<RankRoleModel[]>(this.apiurl + "/Rank/GetRoleList")
  }

  GetRankByID(id: string) :Observable<RankModel>{
    return this.http.get<RankModel>(this.apiurl +'/Level/' + id)
  }


  GetRankPaging(paging : Requestpaging) : Observable<Pagingreponse>{
    if(paging.keyword !='')
    return this.http.get<Pagingreponse>(this.apiurl + '/Level/paging?Keyword='+paging.keyword+'&PageIndex='+paging.pageindex+'&PageSize='+paging.pagesize+'')
    return this.http.get<Pagingreponse>(this.apiurl +'/Level/paging?PageIndex='+paging.pageindex+'&PageSize='+paging.pagesize+'')
  }

  CreateRank(data : RankModel) : Observable<any>{
    return this.http.post(this.apiurl + '/Level',data)
  }

  UpdateRank(id : string,data : RankModel) : Observable<any>{
    return this.http.put(this.apiurl +'/Level/'+id,data)
  }

  DeleteRank(data:string){
    return this.http.delete(this.apiurl + '/Level/'+ data)
  }
}
