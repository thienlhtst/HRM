import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { EmployeeModel } from 'src/Model/Employee/EmployeeModel';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { TokenService } from 'src/Services/Token/token.service';
import * as signalR from '@microsoft/signalr';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss']
})
export class ChatViewComponent implements OnInit {
  constructor(private http : HttpClient,private employeeService : EmployeeService,private token : TokenService){}
  @Input() userchatwith : EventEmitter<EmployeeModel> = new EventEmitter<EmployeeModel>()

  private hubConnection : signalR.HubConnection
  IdofEmployee : string
  ListEmployeeActive : EmployeeModel[] = []
  DataOfEmployee : EmployeeModel
  ListOfEmployee : EmployeeModel[]
  paging : Requestpaging ={
    keyword: '',
    pageindex: 1,
    pagesize: 10
  }
  private connectionPromise: Promise<void>;
  apisignar = environment.apisignar
  messages: string[] = [];
  message: string = '';
  chat : string = ''
  employeeId: number = 1; // Đặt ID của nhân viên
  chatId: number = 1; // Đặt ID của chat
  chatbox : any[] =[
    {
      id:'1',
      user : 'user1',
      content : '4',
      time : '4',
      class : ""
    },
    {
      id:'1',
      user : 'user1',
      content : '3',
      time : '3',
      class : ""
    },{
      id:'1',
      user : 'user1',
      content : '5',
      time : '5',
      class : ""
    },
    {
      id:'1',
      user : 'user2',
      content : '5',
      time : '7'
    },
    {
      id:'1',
      user : 'user2',
      content : '3',
      time : '8'
    },
    {
      id:'1',
      user : 'user2',
      content : '25',
      time : '25'
    },
    {
      id:'1',
      user : 'user1',
      content : '26',
      time : '65'
    }

]


  ngOnInit(): void {
    this.IdofEmployee = this.token.getTokenId()
    this.GetEmployeeActice()
    this.chatbox.sort((a, b) => {
      return parseInt(b.time) - parseInt(a.time);
    });
    console.log(this.chatbox)


    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(this.apisignar+'/signar', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .configureLogging(signalR.LogLevel.Information)
      .build();
    
    this.hubConnection.on('ReceiveMessage', (employeeId: number, message: string) => {
      this.messages.push(`Employee ${employeeId}: ${message}`);
      });
  
    this.hubConnection.start().then(() => {
      this.hubConnection.invoke('JoinChat', this.chatId).catch(err => console.error(err));
      }).catch(err => console.error(err));
  }


  sendMessage(): void {
    this.hubConnection.invoke('SendMessage', this.chatId, this.employeeId, this.message).catch(err => console.error(err));
    this.message = '';
  }

  loadChatHistory(): void {
    this.http.get<any[]>(`http://localhost:5000/api/chatdetails/${this.chatId}`).subscribe(data => {
      data.forEach(chatDetail => {
        this.messages.push(`Employee ${chatDetail.employeeId}: ${chatDetail.content}`);
      });
    });
    console.log(this.message)
  }


  ButtontoChat(chatcontent : string){
    console.log(chatcontent)
    const chat = {
      id : '1',
      user : 'user2',
      content: chatcontent,
      time : new Date()
    }
    this.chatbox.push(chat)

    this.chat = ''
  }

  GetEmployeeById(){
    this.employeeService.GetEmployeebyID(this.IdofEmployee).subscribe((res)=>{
      this.DataOfEmployee = res
    })
  }

  GetEmployeeActice(){
    this.employeeService.GetEmployeePaging(this.paging).subscribe((res)=>{
      this.ListOfEmployee = res.items
      for(var item of this.ListOfEmployee){
        if(item.active == 1){
          this.ListEmployeeActive.push(item)
        }
      }
      this.paging.pageindex =res.pageIndex
      this.paging.pagesize = res.pageSize
    })
  }
}
