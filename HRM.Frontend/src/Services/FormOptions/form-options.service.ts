import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormOptionsService {

  constructor() { }
  private showFormOptionsSource = new BehaviorSubject<boolean>(false)
  private showFormSource = new BehaviorSubject<boolean>(false)
  showFormOptions$ = this.showFormOptionsSource.asObservable()
  showFormSource$ = this.showFormSource.asObservable()

  setShowFormAndOptions(show : boolean){
    this.showFormOptionsSource.next(show)
    this.showFormSource.next(show)
  }
}
