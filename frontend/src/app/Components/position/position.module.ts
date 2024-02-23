/* eslint-disable @typescript-eslint/no-unused-vars */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionListComponent } from './position-list/position-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from 'src/app/theme/shared/components/breadcrumb/breadcrumb.component';
import { HttpClientModule } from '@angular/common/http';
import { PositionServiceService } from 'src/Services/Position/PositionService.service';
import { PositionAddComponent } from './position-add/position-add.component';
import { PositionUpdateComponent } from './position-update/position-update.component';
import { FormsModule } from '@angular/forms';
import { PagingnavComponent } from 'src/app/theme/shared/components/pagingnav/pagingnav.component';
import { NotificationComponent } from 'src/app/theme/shared/components/Notification/Notification.component';
import { PipeSharePipe } from "../../theme/shared/components/Pipe/pipe-share.pipe";
import { SpinnerBetaComponent } from 'src/app/theme/shared/components/spinner-beta/spinner-beta.component';


const route : Routes =[{
  path:'',
  children:[
    {path:'',component:PositionListComponent},
    {path:'add',component:PositionAddComponent},
    {path:'update/:id',component:PositionUpdateComponent}
  ]
}]

@NgModule({
    declarations: [
        PositionListComponent,
        PositionAddComponent,
        PositionUpdateComponent
    ],
    providers: [PositionServiceService],
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        BreadcrumbComponent,
        HttpClientModule,
        FormsModule,
        PagingnavComponent,
        NotificationComponent,
        PipeSharePipe,
        SpinnerBetaComponent
    ]
})
export class PositionModule { }
