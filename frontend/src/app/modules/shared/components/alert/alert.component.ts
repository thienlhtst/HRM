import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgbAlert, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Subject, debounceTime, tap } from 'rxjs';
import { Alert } from 'src/Model/Alert';

@Component({
  selector: 'app-alert',
  standalone: true,
	imports: [NgbAlertModule,CommonModule],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit{
  alerts: Alert[]=[]
@Input() alert:Alert
@Output() flagchange: EventEmitter<boolean> =   new EventEmitter();
	staticAlertClosed = false;
	successMessage:string = '';

	@ViewChild('staticAlert', { static: false }) staticAlert: NgbAlert;
	@ViewChild('selfClosingAlert', { static: false }) selfClosingAlert: NgbAlert;

	constructor() {
		setTimeout(() => this.selfClosingAlert.close(), 8000);
    setTimeout(() =>  this.flagchange.emit(this.staticAlertClosed), 8000);
	}
  ngOnInit(): void {
    this.alerts.push(this.alert)

  }
  close(alert: Alert) {
		this.alerts.splice(this.alerts.indexOf(alert), 1);
    this.flagchange.emit(this.staticAlertClosed)
	}

	reset() {
		this.alerts = Array.from(ALERTS);
	}
	
}

const ALERTS: Alert[] = [
	{
		type: 'success',
		message: 'This is an success alert',
	},
	{
		type: 'info',
		message: 'This is an info alert',
	},
	{
		type: 'warning',
		message: 'This is a warning alert',
	},
	{
		type: 'danger',
		message: 'This is a danger alert',
	},
	{
		type: 'primary',
		message: 'This is a primary alert',
	},
	{
		type: 'secondary',
		message: 'This is a secondary alert',
	},
	{
		type: 'light',
		message: 'This is a light alert',
	},
	{
		type: 'dark',
		message: 'This is a dark alert',
	},
];