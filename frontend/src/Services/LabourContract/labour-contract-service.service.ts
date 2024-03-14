import { Requestpaging } from 'src/Model/other/requestpaging';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { LabourContractModel } from 'src/Model/LabourContract/LabourContractModel';


import { environment } from 'src/environments/environment';
import { Pagingreponse } from 'src/Model/other/pagingreponse';

@Injectable({
  providedIn: 'root'
})
export class LabourContractServiceService {

  constructor(private http : HttpClient) { }
  apiurl : string = environment.apiurl


  GetAllContract() : Observable<LabourContractModel[]>{
    return this.http.get<LabourContractModel[]>(this.apiurl + '/LabourContract')
  }

  GetAllContractByID(id : string) : Observable<LabourContractModel>{
    return this.http.get<LabourContractModel>(this.apiurl +'/LabourContract/' + id)
  }

  GetAllContractPaging(paging : Requestpaging) : Observable<Pagingreponse>{
    if(paging.keyword!='')
    return this.http.get<Pagingreponse>(this.apiurl + '/LabourContract/paging?Keyword='+paging.keyword+'&PageIndex='+paging.pageindex+'&PageSize='+paging.pagesize+'');
    return this.http.get<Pagingreponse>(this.apiurl + '/LabourContract/paging?PageIndex='+paging.pageindex+'&PageSize='+paging.pagesize)
  }

  CreateContract(data : LabourContractModel){
    return this.http.post(this.apiurl + '/LabourContract/CreateLabourContract',data)
  }

  UpdateContract(id : string,data:LabourContractModel){
    return this.http.put(this.apiurl + '/LabourContract/' + id,data)
  }

  DeleteContract(id : string){
    return this.http.delete(this.apiurl +'/LabourContract/' + id)
  }
}
