import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestpagingStatistic } from 'src/Model/other/requestpaingstatistic';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalaryStatisticServiceService {

constructor(private http : HttpClient) { }
  apiurl : string = environment.apiurl +'/Statistic'
  Getpagingsalary(request: RequestpagingStatistic):Observable<any>{
    let apiurlpaing= this.apiurl+'/salarypaging?Month='+request.month+'&Year='+request.year+'&PageIndex='+request.pageindex+'&PageSize='+request.pagesize
    if(request.keyword!='')
      apiurlpaing= this.apiurl+'/salarypaging?Keyword='+request.keyword+'&Month='+request.month+'&Year='+request.year+'&PageIndex='+request.pageindex+'&PageSize='+request.pagesize
    return this.http.get(apiurlpaing)
  }
  GetChartMonthlyinYear(year):Observable<any>{
    return this.http.get(this.apiurl+'/monthlyinyear?year='+year)
  }
  GetTopSalary(top):Observable<any>{ 
    return this.http.get(this.apiurl+'/topsalary?top='+top)
  }

}
