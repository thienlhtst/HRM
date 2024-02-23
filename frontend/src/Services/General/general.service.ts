import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PositionModel } from 'src/Model/PositionModel';
import { RankModel } from 'src/Model/RankModel';
import { SalaryModelList } from 'src/Model/SalaryModelList';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http : HttpClient) { }
  ApiUrl : string = environment.apiurl


  GetPosition(): Observable<PositionModel[]>{
    return this.http.get<PositionModel[]>(this.ApiUrl + '/Position')
  }

  GetRank():Observable<RankModel[]>{
    return this.http.get<RankModel[]>(this.ApiUrl + '/Rank')
  }

  GetSalary():Observable<SalaryModelList[]>{
    return this.http.get<SalaryModelList[]>(this.ApiUrl + '/Salary')
  }





}
