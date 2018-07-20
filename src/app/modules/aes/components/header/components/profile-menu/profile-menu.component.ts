/* TODO
[] compose menu state subscriptions with rxjs tools
*/
import { Component, OnInit, ViewChild } from '@angular/core';

// material
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})

export class ProfileMenuComponent implements OnInit {
  open: boolean = false;
  @ViewChild(MatMenuTrigger) profileMenu: MatMenuTrigger;

  constructor() { }

  ngOnInit() {
    this.profileMenu.onMenuClose.subscribe(() => {
      this.open = this.profileMenu.menuOpen;
      console.log(this.open)
    })
    this.profileMenu.onMenuOpen.subscribe(() => {
      this.open = this.profileMenu.menuOpen;
      console.log(this.open)
    })
  }

}
