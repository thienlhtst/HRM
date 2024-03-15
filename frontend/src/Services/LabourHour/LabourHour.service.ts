import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, forkJoin, map } from 'rxjs';
import { HomelistLabour } from 'src/Model/DayinLabourhour/HomelistLabour';

@Injectable({
  providedIn: 'root'
})
export class LabourHourService {
  constructor(private http: HttpClient) {}
  private apiurl: string = environment.apiurl + '/LabourHour';
  private apiurlday: string = environment.apiurl + '/LabourDay';
  GetAll(): Observable<HomelistLabour[]> {
    return forkJoin([this.http.get(this.apiurl), this.http.get(this.apiurlday)]).pipe(
      map((data: any[]) => {
        data[0].forEach((labourhour) => {
          labourhour.days = data[1].filter((item) => item.idlb.includes(labourhour.id));
        });
        return data[0];
      })
    );
  }
  GetbyIDLabourHour(id: string): Observable<any> {
    return this.http.get(this.apiurl + '/' + id);
  }
  CreateLabourHour(request: any): Observable<any> {
    return this.http.post(this.apiurl, request);
  }
  UpdateLabourHour(request: any): Observable<any> {
    return this.http.put(this.apiurl, request);
  }
  DeleteLabourHour(request: string): Observable<any> {
    return this.http.delete(this.apiurl + '/' + request);
  }
  ///////////////////////////
  GetbyIDLabourDay(id: any): Observable<any> {
    return this.http.get(this.apiurlday + '/' + id);
  }
  CreateLabourDay(request: any): Observable<any> {
    return this.http.post(this.apiurlday, request);
  }
  UpdateLabourDay(request: any): Observable<any> {
    return this.http.put(this.apiurlday, request);
  }
  DeleteLabourDay(request: string): Observable<any> {
    return this.http.delete(this.apiurlday + '/' + request);
  }




}
