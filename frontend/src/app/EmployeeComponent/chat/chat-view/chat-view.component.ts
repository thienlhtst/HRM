import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { EmployeeModel } from 'src/Model/Employee/EmployeeModel';


@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss']
})
export class ChatViewComponent implements OnInit {
  constructor(){}
  @Input() userchatwith : EventEmitter<EmployeeModel> = new EventEmitter<EmployeeModel>()
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
