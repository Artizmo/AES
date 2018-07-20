import { Component, OnInit, ViewChild } from '@angular/core';
import { AesService } from '../../services/aes.service';
import { Subscription } from '../../../node_modules/rxjs';

import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'aes-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string;
  titleSubscription: Subscription;
  userMenuState: boolean = false;
  @ViewChild(MatMenuTrigger) userMenu: MatMenuTrigger;

  constructor(private aes: AesService) {
    this.titleSubscription = this.aes.getPortalTitle()
      .subscribe(title => this.title = `: ${title}`);
  }

  ngOnInit() {
    this.userMenu.onMenuClose.subscribe(() => {
      this.userMenuState = this.userMenu.menuOpen;
      console.log(this.userMenu)
    })
    this.userMenu.onMenuOpen.subscribe(() => {
      this.userMenuState = this.userMenu.menuOpen;
      console.log(this.userMenu)
    })
  }

  test() {
    this.aes.setPortalTitle('Death Star');
  }

}
