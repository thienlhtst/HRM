import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeListComponent } from './home-list/home-list.component';
import { Routes, RouterModule,RouterOutlet } from '@angular/router';
import { HomeAddComponent } from './home-add/home-add.component';
import { ComponentsModule } from '../components/components.module';

const routes: Routes=[
  {
    path:'', component:HomeListComponent,
    children:[
      
      {
        path:'add',component:HomeAddComponent
      }
    ]
  }
]

@NgModule({
  declarations: [HomeListComponent,HomeAddComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    
    RouterModule.forChild(routes),RouterOutlet
  ],
  exports:[HomeListComponent,HomeAddComponent
  ]
})
export class HomeModule { }
