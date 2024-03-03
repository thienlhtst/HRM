import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkHourModel } from 'src/Model/Relationship/WorkHourModel';
import { CheckOut, TimeKeeping } from 'src/Model/Workhours/TimeKeeping';
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
    return this.http.get<WorkHourModel[]>(this.apiurl + '/WorkHour/'+id);
  }
  CreateWorkhour(data : any){
    return this.http.post(this.apiurl + '/WorkHour/',data)
  }
  EditWorkhour(id,data:any){
    return this.http.put(this.apiurl +'/WorkHour/'+id,data)
  }
  DeleteWorkhour(data:string){
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
