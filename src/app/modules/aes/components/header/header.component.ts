import { Component, OnInit, ViewChild } from '@angular/core';
import { AesService } from 'services/aes.service';
import { Subscription } from 'rxjs';

// material
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
  @ViewChild(MatMenuTrigger) profileMenu: MatMenuTrigger;

  constructor(private aes: AesService) {
    this.titleSubscription = this.aes.getPortalTitle()
      .subscribe(title => this.title = `: ${title}`);
  }

  ngOnInit() {
    // this.profileMenu.onMenuClose.subscribe(() => {
    //   this.userMenuState = this.profileMenu.menuOpen;
    //   console.log(this.profileMenu)
    // })
    // this.profileMenu.onMenuOpen.subscribe(() => {
    //   this.userMenuState = this.profileMenu.menuOpen;
    //   console.log(this.profileMenu)
    // })
  }

  test() {
    this.aes.setPortalTitle('Death Star');
  }

}
