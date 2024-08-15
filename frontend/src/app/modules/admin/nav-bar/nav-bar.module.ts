

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { NavRightComponent } from './nav-right/nav-right.component';
import { NavBarComponent } from './nav-bar.component';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../shared/shared.module';
import { PagingnavComponent } from '../../shared/components/pagingnav/pagingnav.component';
import { NgbCollapseModule, NgbDropdownModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [NavLeftComponent,NavRightComponent,NavBarComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,NgbDropdownModule,
    NgbNavModule,
    NgbModule,
    NgbCollapseModule,
  ],

  exports : [NavLeftComponent,NavRightComponent,NavBarComponent]
})
export class NavBarModule { }
