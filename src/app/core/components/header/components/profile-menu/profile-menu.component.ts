/* TODO
  [] compose menu state subscriptions with rxjs tools
  [] maybe use ngFor for the static menu items; import from profile-menu-list.ts
  [] use nav-menu shared component to handle basic menu styles and behaviors
*/
import { Component, OnInit, ViewChild } from '@angular/core';

// services
import { AuthService } from 'core/auth/auth.service';

// material
import { MatMenuTrigger } from '@angular/material/menu';

interface User {
  id,
  firstName,
  lastName,
  organization
}

@Component({
  selector: 'profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent implements OnInit {
  open: boolean = false;
  user: User;
  @ViewChild(MatMenuTrigger) profileMenu: MatMenuTrigger;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.profileMenu.onMenuClose.subscribe(() => {
      this.open = this.profileMenu.menuOpen;
      console.log(this.open)
    })
    this.profileMenu.onMenuOpen.subscribe(() => {
      this.open = this.profileMenu.menuOpen;
      console.log(this.open)
    })

    this.authService
      .getUserById(101)
      .subscribe((user) => this.user = user)
  }

  selectUserPreferences() {
    console.log('test')
  }

}
