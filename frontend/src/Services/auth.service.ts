import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {  Observable, map } from 'rxjs';
import { TokenService } from './token.service';
import {ILogin , ILoginResponse} from 'src/Model/auth.mode';
import { EmployeeModel } from 'src/Model/Employee/EmployeeModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}
  apiurl : string = environment.apiurl


  GetInforToLogin(EmployeeID : string):Observable<EmployeeModel[]>{
    return this.http.get<EmployeeModel[]>(this.apiurl + '/Employee/' +EmployeeID)
  }


  onLogin(data: ILogin) {
    return this.http
      .post<ILoginResponse>(environment.apiurl+'/login', data)
      .pipe(
        map((response) => {
          if (response) {
            this.tokenService.setToken(response.token);
          }
          return response;
        })
      );

  }

  onLogout() {

        this.tokenService.removeToken();
  }
}
