import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    @ViewChild('sidenav') public sidenav!: MatSidenav;

    public onMenuOpen(): void {
        this.sidenav.open();
    }

    public onMenuClose(): void {
        this.sidenav.close();
    }
}
