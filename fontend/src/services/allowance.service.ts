import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Allowancemodel } from '../Model/allowancemodel';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class AllowanceService {
 
// apiurl :string =environment.apiurl
constructor(private http:HttpClient) { }
/*createentity(model: Allowancemodel):Observable<Allowancemodel>{
   
  return this.http.post<Allowancemodel>(this.apiurl+'/allowance',model)
}*/

}
