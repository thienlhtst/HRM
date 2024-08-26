
/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-unused-vars */
import { environment } from '../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {CommonModule} from '@angular/common'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  isAuthentication: BehaviorSubject<number> = new BehaviorSubject<number>(-3);
  apiurl: string = environment.apiurl;
  constructor(private http: HttpClient,private route : Router) {
    const token = this.getToken();
    if (token ) {
      this.DecodeToken(token).subscribe((res) => {
        if (res != null) {
          this.updateToken(parseInt(res.role));
        } else this.updateToken(0);
      });
    }else this.updateToken(0);
  }
  // new code added here
  getRole(): Observable<any> {
    const token = this.getToken();
    if (!token) {
      return new Observable((observer) => {
        observer.next({role:'0'});
        observer.complete();
      });
    }
      
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + token
      })
    };

    return this.http.get(this.apiurl + '/Login', httpOptions);
  }



// new code added here

  DecodeToken(token: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + token
      })
    };

    return this.http.get(this.apiurl + '/Login', httpOptions);
  }

  updateToken(status: number) {
    this.isAuthentication.next(status);
  }

  setToken(token: string) {
    localStorage.setItem(environment.CURRENT_TOKEN, token);
    if(token){
      this.DecodeToken(token).subscribe((res) => {
        if (res != null) {
          this.updateToken(parseInt(res.role));
        }

      });
    }
    else{
      this.route.navigate(['/login'])
    }

  }
  setTokenId(id: string) {
    localStorage.setItem(environment.CURRENT_TOKEN_ID, id);
  }
  getToken(): string | null {
    return localStorage.getItem(environment.CURRENT_TOKEN);
  }
  getTokenId(): string | null {
    return localStorage.getItem(environment.CURRENT_TOKEN_ID);
  }
  removeToken() {
    this.updateToken(0);
    localStorage.removeItem(environment.CURRENT_TOKEN);
    localStorage.removeItem(environment.CURRENT_TOKEN_ID);
  }
}
