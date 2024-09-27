/* eslint-disable @typescript-eslint/no-unused-vars */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EwaAddComponent } from './ewa-add/ewa-add.component';
import { EwaListComponent } from './ewa-list/ewa-list.component';
import { EwaUpdateComponent } from './ewa-update/ewa-update.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PagingnavComponent } from 'src/app/modules/share/components/pagingnav/pagingnav.component';
import { NotificationComponent } from 'src/app/modules/share/components/Notification/Notification.component';

const route : Routes =[{
  path:'',
  children:[
    {path:'',component:EwaListComponent},
    {path:'add',component:EwaAddComponent}
  ]
}]

@NgModule({
  declarations: [
    EwaAddComponent,
    EwaListComponent,
    EwaUpdateComponent
  ],
  imports: [
    CommonModule,
    PagingnavComponent,
    RouterModule.forChild(route),
    CommonModule,
    HttpClientModule, NotificationComponent,
    FormsModule,MatTooltipModule
  ]
})
export class EwaModule { }
