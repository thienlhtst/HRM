import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(private http : HttpClient) { }
  apiurl : string = environment.apiurl
  getLanguage():any{
    let lan = localStorage.getItem("language")
    if (lan == null) {
      return '0'
    }
    return lan
  }

  GetLangugeLayout(FunctionID:string,language:any):Observable<any[]>{
    return this.http.get<any[]>(this.apiurl + '/System/'+FunctionID+'?language='+language);

  }
  GetLangugeFunction(FunctionID:string,language:any):Observable<any>{
    return this.http.get<any>(this.apiurl + '/System/Language?FunctionId='+FunctionID+'&language='+language);
  
  }
  GetMenuLanguage(FunctionID:string,language:any):Observable<any[]>{
    return this.http.get<any>(this.apiurl + '/System/MenuLanguage?FunctionId='+FunctionID+'&language='+language);

  }
  GetNavLangugeFunction(FunctionID:string,language:any):Observable<any[]>{
    return this.http.get<any>(this.apiurl + '/System/ChildLanguage?FunctionId='+FunctionID+'&language='+language);

  }
}
