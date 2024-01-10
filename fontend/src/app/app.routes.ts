import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login-base/login/login.component';
import { HomeListComponent } from './home/home-list/home-list.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
    { path: 'login',component:LoginComponent}

];
