/* eslint-disable @typescript-eslint/no-unused-vars */
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankListComponent } from './rank-list/rank-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from '../../..//shared/components/breadcrumb/breadcrumb.component';
import { HttpClientModule } from '@angular/common/http';
import { RankServiceService } from 'src/Services/Rank/RankService.service';
import { FormsModule } from '@angular/forms';
import { PagingnavComponent } from '../../..//shared/components/pagingnav/pagingnav.component';
import { NotificationComponent } from '../../..//shared/components/Notification/Notification.component';
import { PipeSharePipe } from "../../../shared/components/Pipe/pipe-share.pipe";
import { SpinnerBetaComponent } from '../../..//shared/components/spinner-beta/spinner-beta.component';
import { RankOptionsComponent } from './rank-options/rank-options.component';
import { SharedModule } from '../../..//shared/shared.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RegexService } from 'src/Services/Regex/regex.service';
import { ConfirmationDialogService } from '../../..//shared/components/confirmation-dialog/confirmation-dialog.service';

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
        BreadcrumbComponent,
        HttpClientModule,
        PagingnavComponent,
        NotificationComponent,
        FormsModule,
        PipeSharePipe,
        SpinnerBetaComponent,
        SharedModule,MatTooltipModule
    ]
})
export class RankModule {
}
