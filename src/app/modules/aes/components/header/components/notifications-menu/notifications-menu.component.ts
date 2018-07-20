/* TODO
[] compose menu state subscriptions with rxjs tools
*/
import { Component, OnInit, ViewChild } from '@angular/core';

// material
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'notifications-menu',
  templateUrl: './notifications-menu.component.html',
  styleUrls: ['./notifications-menu.component.scss']
})
export class NotificationsMenuComponent implements OnInit {
  open: boolean = false;
  @ViewChild(MatMenuTrigger) notificationsMenu: MatMenuTrigger;

  constructor() { }

  ngOnInit() {
    this.notificationsMenu.onMenuClose.subscribe(() => {
      this.open = this.notificationsMenu.menuOpen;
      console.log(this.open)
    })
    this.notificationsMenu.onMenuOpen.subscribe(() => {
      this.open = this.notificationsMenu.menuOpen;
      console.log(this.open)
    })
  }

}
