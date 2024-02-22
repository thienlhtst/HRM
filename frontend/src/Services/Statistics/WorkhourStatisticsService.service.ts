import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { EmployeeWork } from 'src/Model/Statistics/EmployeeWork';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkhourStatisticsServiceService {

  constructor(private http : HttpClient) { }
  apiurl : string = environment.apiurl +'/Statistic'
  apiurle : string = environment.apiurl +'/Employee'

  GetpagingWorkhour(keyword,day,month,year):Observable<any>{
    let url:string;
     if(keyword==null)
     url =this.apiurl+'/paging?Month='+month+'&PageIndex=1&PageSize=10'
    else
    url=this.apiurl+'/paging?Keyword='+keyword+'&Month='+month+'&PageIndex=1&PageSize=10'
    return forkJoin([
      this.http.get(this.apiurle),
      this.http.get(url)
    ]).pipe(
      map((data: any[]) => {
        
        let employees: any[] = data[0];
        let workhours: any = data[1];
        let result:any={
          items:[],
          pageIndex:workhours.pageIndex,
          pageSize:workhours.pageSize,
          totalRecords:workhours.totalRecords,
          pageCount:workhours.pageCount
        }
        let resultquery:any[]=[]
        
        employees.forEach(employee => {
          let total=0
          let ResultInForeach :any={
            name:employee.name,
            workhour:[]
          }
           for(let i=1;i<=day;i++){
              let flag = 0;
              workhours.items.forEach(workhour=>{
                  if(employee.id==workhour.employeeID && i==workhour.day )
                  {
                    flag=1
                    total=total+workhour.workhour
                    ResultInForeach.workhour.push(workhour.workhour)
                  }
              })
              if (flag == 0)
                ResultInForeach.workhour.push(0)   
           }
           ResultInForeach.workhour.push(total)   
           resultquery.push(ResultInForeach)
        });
        result.items=resultquery
        return result;
      })
    );
  }
  

  

    GetWeekWorkhour(month:number, year:number):Observable<number[][]>{
    return  this.http.get<number[][]>(this.apiurl +'/week?month='+month+'&year='+year+'')
  }
  GetMonthWorkhour( year:number):Observable<number[]>{
    return this.http.get<number[]>(this.apiurl +'/month?year='+year)
  }
  GetEmployeeOff( date:string):Observable<EmployeeWork>{
    return this.http.get<EmployeeWork>(this.apiurl +'/employeeoff?date='+date)
  }

}
