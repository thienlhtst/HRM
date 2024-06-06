// angular import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// project import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { AdminComponent } from './modules//admin/admin.component';
import { GuestComponent } from './modules//guest/guest.component';
import { NavigationComponent } from './modules//admin/navigation/navigation.component';

import { NavContentComponent } from './modules//admin/navigation/nav-content/nav-content.component';
import { NavCollapseComponent } from './modules//admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavGroupComponent } from './modules//admin/navigation/nav-content/nav-group/nav-group.component';
import { NavItemComponent } from './modules//admin/navigation/nav-content/nav-item/nav-item.component';
import { NavigationItem } from './modules//admin/navigation/navigation';

import { PagingnavComponent } from "./modules/shared/components/pagingnav/pagingnav.component";
import { EmployeeComponent } from './modules//employee/employee.component';
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
        EmployeeComponent,



    ],
    providers: [NavigationItem,NavigationEmployeeItem],
    bootstrap: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule, PagingnavComponent,]
})
export class AppModule {}
