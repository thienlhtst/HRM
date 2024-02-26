import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { environment } from 'src/environments/environment';

@Injectable()
export class HomeService {

    constructor(private http: HttpClient) { }
    ApiUrl: string = environment.apiurl
    GetHomePaging(paging: Requestpaging):Observable<any>{
        if(paging.keyword !='')
    return this.http.get<any>(this.ApiUrl +'/WorkHour/paginghome?Keyword='+paging.keyword+'&PageIndex='+paging.pageindex+'&PageSize='+paging.pagesize+'')
    return this.http.get<any>(this.ApiUrl + '/WorkHour/paginghome?&PageIndex='+paging.pageindex+'&PageSize='+paging.pagesize+'')
    }
}
