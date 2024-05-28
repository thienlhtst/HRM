/* eslint-disable @typescript-eslint/no-unused-vars */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PagingnavComponent } from 'src/app/theme/shared/components/pagingnav/pagingnav.component';
import { NotificationComponent } from 'src/app/theme/shared/components/Notification/Notification.component';
import { FormsModule } from '@angular/forms';
import { PipeSharePipe } from 'src/app/theme/shared/components/Pipe/pipe-share.pipe';
import { SpinnerBetaComponent } from 'src/app/theme/shared/components/spinner-beta/spinner-beta.component';
import { MatTooltipModule } from '@angular/material/tooltip';


const route : Routes=[{
  path:'',
  children:[
    { path:'',component: ProfileViewComponent},

  ]
}]


@NgModule({
  declarations: [
    ProfileViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    HttpClientModule,
    PagingnavComponent,
    NotificationComponent,
    FormsModule,
    PipeSharePipe,
    SpinnerBetaComponent,
    MatTooltipModule
  ]
})
export class ProfileModule { }
