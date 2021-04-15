import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    App404PageComponent,
    AppHomePageComponent,
    AppLoginPageComponent,
} from './pages';
import { SharedModule } from './shared.module';

const routes: Routes = [
    { path: 'home', component: AppHomePageComponent },
    { path: 'login', component: AppLoginPageComponent },
    { path: '404', component: App404PageComponent },
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: '**', redirectTo: '/404' },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
