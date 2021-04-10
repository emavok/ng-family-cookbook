import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App404PageComponent } from './app-404-page';
import { AppHomePageComponent } from './app-home-page';
import { AppLoginPageComponent } from './app-login-page';

const routes: Routes = [
    { path: 'home', component: AppHomePageComponent },
    { path: 'login', component: AppLoginPageComponent },
    { path: '404', component: App404PageComponent },
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: '**', redirectTo: '/404' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
