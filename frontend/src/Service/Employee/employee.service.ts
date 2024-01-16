import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeModel } from '../../Model/EmployeeModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }
  ApiUrl : string = environment.ApiUrl

  GetEmployee() : Observable<EmployeeModel[]>{
      return this.http.get<EmployeeModel[]>(this.ApiUrl + '/employee');
  }

  CreateEmployee(data : EmployeeModel){
      return this.http.post(this.ApiUrl + 'employee/createemployee',data)
  }

  UpdateEmployee(data : EmployeeModel){
    return this.http.put(this.ApiUrl + '/employee/'+ data.id,data)
  }

  DeleteEmployee(data : number){
    return this.http.delete(this.ApiUrl + '/employee/' + data)
  }
}
