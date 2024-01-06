import { Routes } from '@angular/router';
import { LoginComponent } from './login-base/login/login.component';
import { HomeListComponent } from './home/home-list/home-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {path:'home',component:HomeListComponent},
    { path: 'login', component:LoginComponent },

];
