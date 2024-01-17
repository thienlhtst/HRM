import { SalaryModel } from '../../Model/SalaryModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor(private http : HttpClient) { }
  apiurl : string = environment.apiurl

  GetSalary():Observable<SalaryModel[]>{
    return this.http.get<SalaryModel[]>(this.apiurl +'/Salary')
  }

  CreateSalary(data : SalaryModel){
    return this.http.post(this.apiurl + '/Salary/createsalary',data)
  }

  UpdateSalary(data : SalaryModel){
    return this.http.put(this.apiurl +'/Salary/'+data.id,data)
  }

  DeleteSalary(data:number){
    return this.http.delete(this.apiurl + '/Salary/'+data)
  }
}
