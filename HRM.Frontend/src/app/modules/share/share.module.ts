import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbCollapseModule, NgbDropdownModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgScrollbarModule } from 'ngx-scrollbar'; // Import NgScrollbarModule from the correct package
import {  provideHttpClient } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SearchInputComponent } from './components/input-components/search-input/search-input.component';
import { AvtComponent } from './components/avt/avt.component';
import { LanguageInputComponent } from './components/input-components/language-input/language-input.component';
import { TextInputComponent } from './components/input-components/text-input/text-input.component';
import { SpinnerAlphaComponent } from './components/spinner-alpha/spinner-alpha.component';
import { CreateComponent } from './components/create/create.component';
import { SelectInputComponent } from './components/input-components/select-input/select-input.component';
import { FileInputComponent } from './components/input-components/file-input/file-input.component';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons'; // Import DropDownButtonModule from the correct package

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbModule,
    DropDownButtonModule,
    NgbCollapseModule,
  ],providers: [provideHttpClient()],
  declarations: [FileInputComponent,SelectInputComponent,CreateComponent,SpinnerAlphaComponent,SpinnerComponent, SearchInputComponent, AvtComponent,LanguageInputComponent,TextInputComponent],

  exports: [DropDownButtonModule,FileInputComponent,SelectInputComponent,SpinnerAlphaComponent,LanguageInputComponent,TextInputComponent,CreateComponent,SpinnerComponent]
})
export class ShareModule { }
