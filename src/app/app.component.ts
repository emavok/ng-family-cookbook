import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'fcb';
  public navMenuCollapsed: boolean = true;

  public onNavMenuBtnClick() {
    // toggle nav menu on nav menu btn click
    this.navMenuCollapsed = !this.navMenuCollapsed;
  }
}
