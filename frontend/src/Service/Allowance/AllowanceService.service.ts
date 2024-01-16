import { Injectable } from '@angular/core';
import { Allowancemodel } from '../../Model/AllowanceModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllowanceServiceService {

constructor(private http : HttpClient) { }
  apiurl : string = environment.ApiUrl

  getAllowance(): Observable<Allowancemodel[]> {
    return this.http.get<Allowancemodel[]>(this.apiurl+'/Allowance')
  }

  CreateAllowance(data : Allowancemodel){
    return this.http.post(this.apiurl + 'Allowance/createallowance',data)
  }

  UpdateAllowance(data : Allowancemodel){
      return this.http.put(this.apiurl+'/Allowance/'+data.id,data)
  }

  DeleteAllowance(data:number){
    return this.http.delete(this.apiurl+'/Allowance/'+data)
  }
}


