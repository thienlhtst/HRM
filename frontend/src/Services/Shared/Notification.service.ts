import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

constructor() { }

 Setflag(){
  localStorage.setItem('flag_nofi', '1');
 }
 Getflag(): string | null{
  return localStorage.getItem('flag_nofi');
 }
 Removeflag(){
  localStorage.removeItem('flag_nofi');

 }

}
