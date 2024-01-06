import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeListComponent } from './home-list/home-list.component';



@NgModule({
  declarations: [HomeListComponent],
  imports: [
    CommonModule
  ],
  exports:[HomeListComponent

  ]
})
export class HomeModule { }
