import 'hammerjs';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
    AppFooterComponent,
    AppHeaderComponent,
    AppMenuComponent,
} from './components';
import { AppLoginPageComponent } from './pages';
import { SharedModule } from './shared.module';

@NgModule({
    imports: [
        SharedModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        AppHeaderComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppLoginPageComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
