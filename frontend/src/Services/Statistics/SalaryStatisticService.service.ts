import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalaryStatisticServiceService {

constructor(private http : HttpClient) { }
  apiurl : string = environment.apiurl +'/Statistic'
  Getpagingsalary(keyword,month,year):Observable<any>{
    let apiurlpaing= this.apiurl+'/salarypaging?Month='+month+'&Year='+year+'&PageIndex=1&PageSize=10'
    if(keyword!='')
      apiurlpaing= this.apiurl+'/salarypaging?Keyword='+keyword+'&Month='+month+'&Year='+year+'&PageIndex=1&PageSize=10'
    return this.http.get(apiurlpaing)
  }
  GetChartMonthlyinYear(year):Observable<any>{
    return this.http.get(this.apiurl+'/monthlyinyear?year='+year)
  }
  GetTopSalary(top):Observable<any>{
    return this.http.get(this.apiurl+'/topsalary?top='+top)
  }

}
