import { NavigationEmployeeItem } from './theme/layouts/employee/navigation-employee/navigation-employee';
// angular import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// project import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './theme/shared/shared.module';
import { GuestComponent } from './theme/layouts/guest/guest.component';
import { NavigationComponent } from './theme/layouts/admin/navigation/navigation.component';
import { NavContentComponent } from './theme/layouts/admin/navigation/nav-content/nav-content.component';
import { NavCollapseComponent } from './theme/layouts/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavGroupComponent } from './theme/layouts/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavItemComponent } from './theme/layouts/admin/navigation/nav-content/nav-item/nav-item.component';
import { NavigationItem } from './theme/layouts/admin/navigation/navigation';

import { PagingnavComponent } from "./theme/shared/components/pagingnav/pagingnav.component";


import { NavigationEmployeeComponent } from './theme/layouts/employee/navigation-employee/navigation-employee.component';
import { NavContentEmployeeComponent } from './theme/layouts/employee/navigation-employee/nav-content-employee/nav-content-employee.component';
import { NavCollapseEmployeeComponent } from './theme/layouts/employee/navigation-employee/nav-content-employee/nav-collapse-employee/nav-collapse-employee.component';
import { NavGroupEmployeeComponent } from './theme/layouts/employee/navigation-employee/nav-content-employee/nav-group-employee/nav-group-employee.component';
import { NavItemEmployeeComponent } from './theme/layouts/employee/navigation-employee/nav-content-employee/nav-item-employee/nav-item-employee.component';
import { ContractViewComponent } from './EmployeeComponent/Contract/contract-view/contract-view.component';
import { AdminComponent } from './theme/layouts/admin/admin.component';
import { NavBarModule } from './theme/layouts/admin/nav-bar/nav-bar.module';

@NgModule({
    declarations: [
        AppComponent,
        GuestComponent,
        NavigationComponent,
        NavContentComponent,
        NavCollapseComponent,
        NavGroupComponent,
        NavItemComponent,
        AdminComponent,
        NavigationEmployeeComponent,
        NavContentEmployeeComponent,
        NavCollapseEmployeeComponent,
        NavGroupEmployeeComponent,
        NavItemEmployeeComponent,
        ContractViewComponent,


    ],
    providers: [NavigationItem,NavigationEmployeeItem],
    bootstrap: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule, PagingnavComponent,NavBarModule]
})
export class AppModule {}
