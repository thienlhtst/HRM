import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkHourModel } from 'src/Model/Relationship/WorkHourModel';

@Injectable({
  providedIn: 'root'
})
export class WorkHourService {

constructor(private http : HttpClient) { }
  apiurl : string = environment.apiurl

  GetWorkHour():Observable<WorkHourModel[]>{
    return this.http.get<WorkHourModel[]>(this.apiurl + '/WorkHour');
  }

}
