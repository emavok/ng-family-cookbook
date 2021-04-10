import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {

    @Output() public menuOpen: EventEmitter<void> = new EventEmitter<void>();

    constructor() { }

    public onOpenMenuClick(event: Event): void {
        event.preventDefault();
        this.menuOpen.emit();
    }
}
