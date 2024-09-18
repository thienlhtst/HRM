import { Routes } from '@angular/router';
import { HomeComponent } from './modules/admin/home.component';
import { EmployeeHomeComponent } from './modules/employee/employee-home.component';

export const routes: Routes = [
    {
        path: 'a',
        loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule),
    },
    {
        path: 'admin',
        loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    },
    {
        path: 'profile',
        loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule),
    },
    {
        path:'',
        redirectTo:'admin',
        pathMatch:'full'
    }

];
