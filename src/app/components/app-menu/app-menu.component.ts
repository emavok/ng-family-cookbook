import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app-menu.component.html',
    styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent {

    @Output() public menuClose: EventEmitter<void> = new EventEmitter<void>();

    constructor() { }

    public onMenuCloseClick(event: Event): void {
        event.preventDefault();
        this.menuClose.emit();
    }
}
