/* TODO
[] compose menu state subscriptions with rxjs tools
*/
import { Component, OnInit, ViewChild } from '@angular/core';

// material
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'apps-menu',
  templateUrl: './apps-menu.component.html',
  styleUrls: ['./apps-menu.component.scss']
})
export class AppsMenuComponent implements OnInit {
  open: boolean = false;
  @ViewChild(MatMenuTrigger) appsMenu: MatMenuTrigger;

  constructor() { }

  ngOnInit() {
    this.appsMenu.onMenuClose.subscribe(() => {
      this.open = this.appsMenu.menuOpen;
    })
    this.appsMenu.onMenuOpen.subscribe(() => {
      this.open = this.appsMenu.menuOpen;
    })
  }

}
