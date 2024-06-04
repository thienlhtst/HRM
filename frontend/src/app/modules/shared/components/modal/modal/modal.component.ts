import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

declare var window:any;
@Component({
  selector: 'app-modal',
  standalone:true,

  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit,OnChanges {
  formModal:any;
  @Input()
  flag!: boolean ;
  @Output() flagchange: EventEmitter<boolean> =   new EventEmitter();

  constructor() {}
  ngOnInit(): void {

    this.formModal =  document.getElementById("exampleModal")
    if(this.flag==true) 
    if(this.formModal!= null){
      this.formModal.style.display='block'
  }
}
  ngOnChanges(changes: SimpleChanges) {
 
    for (let property in changes) {
        if (property === 'flag') {
        if (changes[property].currentValue) this.openModal() ;
          
        } 
    }
}
  openModal(){
    if(this.formModal!= null){
      this.formModal.style.display='block'
      
    }
  }
  dosomething(){
    if(this.formModal!= null){
      this.formModal.style.display='none'
      this.flag=false
      this.flagchange.emit(this.flag)
    }
  }
}
