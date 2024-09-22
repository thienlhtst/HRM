/* eslint-disable @typescript-eslint/no-unused-vars */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionListComponent } from './position-list/position-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PositionServiceService } from 'src/Services/Position/PositionService.service';
import { FormsModule } from '@angular/forms';
import { PositionOptionsComponent } from './position-options/position-options.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RegexService } from 'src/Services/Regex/regex.service';
import { ConfirmationDialogService } from 'src/app/modules/share/components/confirmation-dialog/confirmation-dialog.service';
import { PagingnavComponent } from 'src/app/modules/share/components/pagingnav/pagingnav.component';
import { NotificationComponent } from 'src/app/modules/share/components/Notification/Notification.component';
import { PipeSharePipe } from 'src/app/modules/share/components/Pipe/pipe-share.pipe';
import { SpinnerBetaComponent } from 'src/app/modules/share/components/spinner-beta/spinner-beta.component';

const route : Routes =[{
  path:'',
  children:[
    {path:'',component:PositionListComponent},
    {path:'options/:id',component:PositionOptionsComponent}
  ]
}]

@NgModule({
    declarations: [
        PositionListComponent,
        PositionOptionsComponent
    ],
    providers: [PositionServiceService,ConfirmationDialogService,RegexService],
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        HttpClientModule,
        FormsModule,
        PagingnavComponent,
        NotificationComponent,
        PipeSharePipe,
        SpinnerBetaComponent,
      MatTooltipModule
    ]
})
export class PositionModule { }
