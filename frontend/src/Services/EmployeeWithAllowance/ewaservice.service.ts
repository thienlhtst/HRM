import { EwaAutoModel } from './../../Model/EmployeeWithAllowance/EwaAutoModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EWAModel } from 'src/Model/EmployeeWithAllowance/EWAModel';
import { Pagingreponse } from 'src/Model/other/pagingreponse';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EWAServiceService {

  constructor(private http : HttpClient) { }

  apiurl : string = environment.apiurl

  getEWA():Observable<EWAModel[]>{
    return this.http.get<EWAModel[]>(this.apiurl + '/EmployeesWithAllowances')
  }

  getEWApaging(paging : Requestpaging):Observable<Pagingreponse>{
    if(paging.keyword != '')
    return this.http.get<Pagingreponse>(this.apiurl + '/EmployeesWithAllowances/paging?Keyword='+paging.keyword+'&PageIndex='+paging.pageindex+'&PageSize='+paging.pagesize+'')
    return this.http.get<Pagingreponse>(this.apiurl + '/EmployeesWithAllowances/paging?PageIndex='+paging.pageindex+'&PageSize='+paging.pagesize+'')
  }

  AutoEWA(data : EwaAutoModel){
    return this.http.post(this.apiurl + '/EmployeesWithAllowances/auto',data)
  }
}
