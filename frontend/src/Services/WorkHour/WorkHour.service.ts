/* eslint-disable @typescript-eslint/no-explicit-any */
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkHourModel } from 'src/Model/Relationship/WorkHourModel';
import { CheckOut, TimeKeeping } from 'src/Model/Workhours/TimeKeeping';
import { WorkHourCreateRequest } from 'src/Model/Workhours/WorkHourCreateRequest';
import { WorkHourofEmployee } from 'src/Model/Workhours/WorkHourofEmployee';
import { WorkhourEditRequest } from 'src/Model/Workhours/WorkhourEditRequest';
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
  GetbyId(id:any):Observable<any>{
    return this.http.get<any>(this.apiurl + '/WorkHour/'+id);
  }

  GetWorkHourByEmployeeID(id : string) : Observable<WorkHourofEmployee[]>{
    return this.http.get<WorkHourofEmployee[]>(this.apiurl + '/WorkHour/GetEmployeeWorkHour/'+id)
  }

  CreateWorkhour(data : WorkHourCreateRequest):Observable<any>{
    return this.http.post(this.apiurl + '/WorkHour/create',data)
  }
  EditWorkhour(data:WorkhourEditRequest):Observable<any>{
    return this.http.put(this.apiurl +'/WorkHour/'+data.id,data)
  }
  DeleteWorkhour(data:string):Observable<any>{
    return this.http.delete(this.apiurl + '/WorkHour/'+data)
  }


  GetWorkHourPaging(paging:Requestpaging):Observable<Pagingreponse>{
    if(paging.keyword!='')
    return this.http.get<Pagingreponse>(this.apiurl + '/WorkHour/paging?Keyword='+paging.keyword+'&PageIndex='+paging.pageindex+'&PageSize='+paging.pagesize+'');
    return this.http.get<Pagingreponse>(this.apiurl + '/WorkHour/paging?PageIndex='+paging.pageindex+'&PageSize='+paging.pagesize+'');
  }
  GetWorkHourHome():Observable<WorkHourModel[]>{
    return this.http.get<WorkHourModel[]>(this.apiurl + '/WorkHour');
  }
  Checkin(Checkin:TimeKeeping):Observable<any>{
    return this.http.post<any>(this.apiurl + '/WorkHour',Checkin);
  }
  Checkout(Checkin:CheckOut):Observable<any>{
    return this.http.put<any>(this.apiurl + '/WorkHour/checkout',Checkin);
  }

}
