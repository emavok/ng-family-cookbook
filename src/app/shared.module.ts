import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {FlexLayoutModule} from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatExpansionModule,
        MatInputModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatButtonModule,
        OverlayModule,
    ],
    exports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatExpansionModule,
        MatInputModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatButtonModule,
        OverlayModule,
    ],
    declarations: [],
    providers: [],
    bootstrap: []
})
export class SharedModule { }
