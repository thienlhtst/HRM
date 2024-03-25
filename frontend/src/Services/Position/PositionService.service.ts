/* eslint-disable @typescript-eslint/no-explicit-any */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PositionModel } from '../../Model/PositionModel';
import { environment } from 'src/environments/environment';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { Pagingreponse } from 'src/Model/other/pagingreponse';

@Injectable()
export class PositionServiceService {

constructor(private http : HttpClient) {}
  ApiUrl : string = environment.apiurl


  GetPosition(): Observable<PositionModel[]>{
    return this.http.get<PositionModel[]>(this.ApiUrl + '/Position')
  }

  GetPositionByID(id:string) : Observable<PositionModel>{
    return this.http.get<PositionModel>(this.ApiUrl +'/Position/'+id)
  }

  GetPositionPaging(paging : Requestpaging):Observable<Pagingreponse>{
    if(paging.keyword !='')
    return this.http.get<Pagingreponse>(this.ApiUrl +'/Position/paging?Keyword='+paging.keyword+'&PageIndex='+paging.pageindex+'&PageSize='+paging.pagesize+'')
    return this.http.get<Pagingreponse>(this.ApiUrl + '/Position/paging?&PageIndex='+paging.pageindex+'&PageSize='+paging.pagesize+'')

  }

  CreatePosition(data : PositionModel) : Observable<any>{
    return this.http.post(this.ApiUrl + '/Position/createposition',data)
  }

  UpdatePosition(id : string,data: PositionModel) : Observable<any>{
    return this.http.put(this.ApiUrl + '/Position/'+id,data)
  }

  DeletePosition(id : string){
    return this.http.delete(this.ApiUrl + '/Position/' + id)
  }
}



