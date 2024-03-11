
import { Pagingreponse } from './../../Model/other/pagingreponse';
import { Injectable } from '@angular/core';
import { Allowancemodel } from '../../Model/AllowanceModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { AllowEmployeeModel } from 'src/Model/Allowance/AllowEmployeeModel';
@Injectable({
  providedIn: 'root'
})
export class AllowanceServiceService {

constructor(private http : HttpClient) { }
  apiurl : string = environment.apiurl

  getAllowance(): Observable<Allowancemodel[]> {
    return this.http.get<Allowancemodel[]>(this.apiurl+'/Allowance')
  }

  getAllowanceByID(id : string) : Observable<Allowancemodel>{
    return this.http.get<Allowancemodel>(this.apiurl + '/Allowance/' + id)
  }

  getAllowancePaging(paging : Requestpaging) : Observable<Pagingreponse>{
    if(paging.keyword!='')
    return this.http.get<Pagingreponse>(this.apiurl + '/Allowance/paging?Keyword='+paging.keyword+'&PageIndex='+paging.pageindex+'&PageSize='+paging.pagesize+'');
    return this.http.get<Pagingreponse>(this.apiurl + '/Allowance/paging?PageIndex='+paging.pageindex+'&PageSize='+paging.pagesize)
  }

  getAllowEmployee() : Observable<AllowEmployeeModel[]>{
    return this.http.get<AllowEmployeeModel[]>(this.apiurl + '/Allowance/rules')
  }

  CreateAllowance(data : Allowancemodel){
    return this.http.post(this.apiurl + '/Allowance/createallowance',data)
  }



  UpdateAllowance(id : string,data : Allowancemodel){
      return this.http.put(this.apiurl+'/Allowance/'+id,data)
  }

  DeleteAllowance(data:string){
    return this.http.delete(this.apiurl+'/Allowance/'+data)
  }
}


