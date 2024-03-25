import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegexService {

  constructor() { }
  UserNameRegex = /^[A-Za-z]+$/
  NumberRegex = /^[0-9]+$/

}
