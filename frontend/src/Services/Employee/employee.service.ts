import { EmployeeCreateModel } from 'src/Model/Employee/EmployeeCreateModel';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeModel } from '../../Model/Employee/EmployeeModel';
import { environment } from 'src/environments/environment';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { Pagingreponse } from 'src/Model/other/pagingreponse';
import { EmployeeUpdateModel } from 'src/Model/Employee/EmployeeUpdateModel';
import { EmployeeRulesModel } from 'src/Model/Employee/EmployeeRulesModel';
import { EmployeeHasAllowanceModel } from 'src/Model/Employee/EmployeeHasAllowanceModel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }
  ApiUrl : string = environment.apiurl

  GetEmployee() : Observable<EmployeeModel[]>{
      return this.http.get<EmployeeModel[]>(this.ApiUrl + '/Employee');
  }
  GetEmployeebyID(id):Observable<EmployeeModel>{
    return this.http.get<EmployeeModel>(this.ApiUrl + '/Employee/'+id);
  }
  GetEmployeePaging(paging : Requestpaging) : Observable<Pagingreponse>{
    if(paging.keyword != '')
    return this.http.get<Pagingreponse>(this.ApiUrl +'/Employee/paging?Keyword='+paging.keyword+'&PageIndex='+paging.pageindex+'&PageSize='+paging.pagesize+'');
    return this.http.get<Pagingreponse>(this.ApiUrl + '/Employee/paging?&PageIndex='+paging.pageindex+'&PageSize='+paging.pagesize+'')
  }

  GetEmployeeByPositionAndRank(id : string):Observable<EmployeeRulesModel[]>{
    return this.http.get<EmployeeRulesModel[]>(this.ApiUrl + '/Employee/bypositionandrank/' + id)
  }

  GetEmployeeByAllowance(id : string) : Observable<EmployeeRulesModel[]>{
    return this.http.get<EmployeeRulesModel[]>(this.ApiUrl +'/Employee/byallowance/'+id)
  }

  GetAllowanceByEmployeeID(id : string) : Observable<EmployeeHasAllowanceModel[]>{
    return this.http.get<EmployeeHasAllowanceModel[]>(this.ApiUrl + '/Employee/GetAllowanceByEmployee/' + id)
  }

  CreateEmployee(data : EmployeeCreateModel){
      return this.http.post(this.ApiUrl + '/Employee/createemployee',data)
  }

  UpdateEmployee(id : string,data : EmployeeUpdateModel){
    return this.http.put(this.ApiUrl + '/Employee/'+ id,data)
  }

  DeleteEmployee(data : string){
    return this.http.delete(this.ApiUrl + '/Employee/' + data)
  }
}
