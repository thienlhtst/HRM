import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  isAuthentication: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor() {
    const token = this.getToken();
    if (token) {
      this.updateToken(true);
    }
  }

  updateToken(status: boolean) {
    this.isAuthentication.next(status);
  }

  setToken(token: string) {
    this.updateToken(true);
    localStorage.setItem(environment.CURRENT_TOKEN, token);
  }
  setTokenId(id: string) {
    localStorage.setItem(environment.CURRENT_TOKEN_ID, id);
  }
  getToken( ): string | null {
    return localStorage.getItem(environment.CURRENT_TOKEN);
  }
  getTokenId(): string | null {
    return localStorage.getItem(environment.CURRENT_TOKEN_ID);
  }
  removeToken() {
    this.updateToken(false);
    localStorage.removeItem(environment.CURRENT_TOKEN);
    localStorage.removeItem(environment.CURRENT_TOKEN_ID);
  }
}
