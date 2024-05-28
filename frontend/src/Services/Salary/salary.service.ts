import { SalaryModel } from '../../Model/SalaryModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { Pagingreponse } from 'src/Model/other/pagingreponse';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor(private http : HttpClient) { }
  apiurl : string = environment.apiurl

  GetSalary():Observable<SalaryModel[]>{
    return this.http.get<SalaryModel[]>(this.apiurl +'/Salary')
  }

  GetSalaryByID(id: string) : Observable<SalaryModel>{
    return this.http.get<SalaryModel>(this.apiurl +'/Salary/'+id)
  }

  GetSalaryPaging(paging : Requestpaging) : Observable<Pagingreponse>{
    if(paging.keyword != '')
    return this.http.get<Pagingreponse>(this.apiurl + '/Salary/paging?Keyword='+paging.keyword+'&PageIndex='+paging.pageindex+'&PageSize='+paging.pagesize+'')
    return this.http.get<Pagingreponse>(this.apiurl + '/Salary/paging?PageIndex='+paging.pageindex+'&PageSize='+paging.pagesize+'')
  }

  CreateSalary(data : SalaryModel){
    return this.http.post(this.apiurl + '/Salary',data)
  }

  UpdateSalary(id : string,data : SalaryModel){
    return this.http.put(this.apiurl +'/Salary/'+id,data)
  }

  DeleteSalary(data:string){
    return this.http.delete(this.apiurl + '/Salary/'+data)
  }
}
