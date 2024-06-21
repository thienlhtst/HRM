/* eslint-disable @typescript-eslint/no-unused-vars */
// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// project import
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CardComponent } from './components/card/card.component';
import { NgScrollbarModule } from 'ngx-scrollbar';


// bootstrap import
import { NgbDropdownModule, NgbNavModule, NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/Services/Auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { TokenService } from 'src/Services/Token/token.service';
import { ModalComponent } from './components/modal/modal/modal.component';
import { PipeSharePipe } from './components/Pipe/pipe-share.pipe';
import { SpinnerBetaComponent } from './components/spinner-beta/spinner-beta.component';
import { SearchInputComponent } from './components/input-components/search-input/search-input.component';
import { AvtComponent } from './components/avt/avt.component';
import { TableComponent } from './components/table/table.component';
import { LanguageInputComponent } from './components/input-components/language-input/language-input.component';






@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbComponent,
    NgbDropdownModule,
    NgbNavModule,
    NgbModule,
    NgbCollapseModule,
    NgScrollbarModule,
    CardComponent,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbComponent,
    SpinnerComponent,
    NgbModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbCollapseModule,
    NgScrollbarModule,
    CardComponent,
    AvtComponent,
    LanguageInputComponent


  ],
  providers:[AuthService,TokenService],
  declarations: [SpinnerComponent, SearchInputComponent, AvtComponent,LanguageInputComponent],
})
export class SharedModule {}
