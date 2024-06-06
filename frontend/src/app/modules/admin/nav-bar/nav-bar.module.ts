

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { NavRightComponent } from './nav-right/nav-right.component';
import { NavBarComponent } from './nav-bar.component';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [NavLeftComponent,NavRightComponent,NavBarComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],

  exports : [NavLeftComponent,NavRightComponent,NavBarComponent]
})
export class NavBarModule { }
