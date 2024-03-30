/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AERulesModel } from 'src/Model/AllowancesAndEmployeeRules/AERulesModel';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AllowancesAndEmployeeRulesService {

  constructor(private http : HttpClient) { }
  apiurl : string = environment.apiurl + '/Allowance'


  GetAll() : Observable<AERulesModel[]>{
    return this.http.get<AERulesModel[]>(this.apiurl + '/rules')
  }

  CreateRules(data : any) : Observable<AERulesModel[]>{
    return this.http.post<AERulesModel[]>(this.apiurl + '/createallowancerules',data )
  }
}

