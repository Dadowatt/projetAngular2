import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { TableVoitureComponent } from './table-voiture/table-voiture.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'table-voiture', component: TableVoitureComponent},
    { path: '', redirectTo: 'login', pathMatch: 'full'}
];
