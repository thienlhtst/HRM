/* eslint-disable @typescript-eslint/no-unused-vars */
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankListComponent } from './rank-list/rank-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RankServiceService } from 'src/Services/Rank/RankService.service';
import { FormsModule } from '@angular/forms';
import { RankOptionsComponent } from './rank-options/rank-options.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RegexService } from 'src/Services/Regex/regex.service';
import { ConfirmationDialogService } from 'src/app/modules/share/components/confirmation-dialog/confirmation-dialog.service';
import { PagingnavComponent } from 'src/app/modules/share/components/pagingnav/pagingnav.component';
import { NotificationComponent } from 'src/app/modules/share/components/Notification/Notification.component';
import { SpinnerBetaComponent } from 'src/app/modules/share/components/spinner-beta/spinner-beta.component';
import { PipeSharePipe } from 'src/app/modules/share/components/Pipe/pipe-share.pipe';

const route : Routes=[{
  path:'',
  children:[
    {path:'',component:RankListComponent},
    {path:'update/:id',component:RankOptionsComponent}
  ]
}]

@NgModule({
    declarations: [
        RankListComponent,
        RankOptionsComponent
    ],
    providers: [RankServiceService,RegexService,ConfirmationDialogService],
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
export class RankModule {
}
