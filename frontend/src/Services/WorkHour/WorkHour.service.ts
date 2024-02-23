import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkHourModel } from 'src/Model/Relationship/WorkHourModel';
import { Pagingreponse } from 'src/Model/other/pagingreponse';
import { Requestpaging } from 'src/Model/other/requestpaging';

@Injectable({
  providedIn: 'root'
})
export class WorkHourService {

constructor(private http : HttpClient) { }
  apiurl : string = environment.apiurl

  GetWorkHour():Observable<WorkHourModel[]>{
    return this.http.get<WorkHourModel[]>(this.apiurl + '/WorkHour');
  }
  GetWorkHourPaging(paging:Requestpaging):Observable<Pagingreponse>{
    if(paging.keyword!='')
    return this.http.get<Pagingreponse>(this.apiurl + '/WorkHour/paging?Keyword='+paging.keyword+'&PageIndex='+paging.pageindex+'&PageSize='+paging.pagesize+'');
    return this.http.get<Pagingreponse>(this.apiurl + '/WorkHour/paging?PageIndex='+paging.pageindex+'&PageSize='+paging.pagesize+'');
  }
  GetWorkHourHome():Observable<WorkHourModel[]>{
    return this.http.get<WorkHourModel[]>(this.apiurl + '/WorkHour');
  }

}
