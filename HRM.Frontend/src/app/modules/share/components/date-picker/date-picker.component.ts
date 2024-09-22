/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  standalone: true,
	imports: [NgbDatepickerModule, NgbAlertModule, FormsModule, JsonPipe],
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  model: NgbDateStruct | undefined;
  today= new Date()
  @Input() day:string='yyyy-mm-dd'
  @Output() Datechange: EventEmitter<NgbDateStruct> =   new EventEmitter();
  constructor() { }

  ngOnInit() {

    
  }
  onchange(){
    this.Datechange.emit(this.model)
  }
}
