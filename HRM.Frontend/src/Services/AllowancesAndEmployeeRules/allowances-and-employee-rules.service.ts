/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllowanceRulesModel } from 'src/Model/AllowancesAndEmployeeRules/AllowanceRulesModel';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AllowancesAndEmployeeRulesService {

  constructor(private http : HttpClient) { }
  apiurl : string = environment.apiurl + '/Allowance'


  GetAll() : Observable<AllowanceRulesModel[]>{
    return this.http.get<AllowanceRulesModel[]>(this.apiurl + '/rules')
  }

  CreateRules(data : any) : Observable<AllowanceRulesModel[]>{
    return this.http.post<AllowanceRulesModel[]>(this.apiurl + '/createallowancerules',data )
  }
}

