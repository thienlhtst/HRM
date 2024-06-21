/* eslint-disable @typescript-eslint/no-unused-vars */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

const route : Routes=[{
  path:'',
  children:[
    { path:'',component: ChatViewComponent},

  ]
}]

@NgModule({
  declarations: [
    ChatViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    HttpClientModule,
    FormsModule,
    MatTooltipModule,
  ]
})
export class ChatModule { }
