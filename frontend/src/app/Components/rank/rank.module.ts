/* eslint-disable @typescript-eslint/no-unused-vars */
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankListComponent } from './rank-list/rank-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from 'src/app/theme/shared/components/breadcrumb/breadcrumb.component';
import { HttpClientModule } from '@angular/common/http';
import { RankServiceService } from 'src/Services/Rank/RankService.service';
import { FormsModule } from '@angular/forms';
import { PagingnavComponent } from 'src/app/theme/shared/components/pagingnav/pagingnav.component';
import { NotificationComponent } from 'src/app/theme/shared/components/Notification/Notification.component';
import { PipeSharePipe } from "../../theme/shared/components/Pipe/pipe-share.pipe";
import { SpinnerBetaComponent } from 'src/app/theme/shared/components/spinner-beta/spinner-beta.component';
import { RankOptionsComponent } from './rank-options/rank-options.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

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
    providers: [RankServiceService],
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
        SharedModule
    ]
})
export class RankModule {
}
