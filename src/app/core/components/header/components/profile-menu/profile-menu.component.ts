/* TODO
  [] compose menu state subscriptions with rxjs tools
  [] maybe use ngFor for the static menu items; import from profile-menu-list.ts
  [] use nav-menu shared component to handle basic menu styles and behaviors
*/
import { Component, OnInit, ViewChild } from '@angular/core';

// services
import { UserService } from 'core/services/user.service';
import { AuthService } from 'auth/auth.service';

// material
import { MatMenuTrigger } from '@angular/material/menu';

// models
import User from '../../../../models/user.model';

@Component({
  selector: 'profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent implements OnInit {
  open: boolean = false;
  user: User;
  @ViewChild(MatMenuTrigger) profileMenu: MatMenuTrigger;

  constructor(private authService: AuthService, private userService: UserService) {}

  ngOnInit() {
    this.profileMenu.onMenuClose.subscribe(() => {
      this.open = this.profileMenu.menuOpen;
      console.log(this.open)
    })
    this.profileMenu.onMenuOpen.subscribe(() => {
      this.open = this.profileMenu.menuOpen;
      console.log(this.open)
    })

    this.userService.getUser().subscribe(<User>(user) => {
      this.user = user;
    })
  }

  logout() {
    console.log('logging out!')
    this.authService.logout()
  }

  selectUserPreferences() {
    console.log('test')
  }

}
