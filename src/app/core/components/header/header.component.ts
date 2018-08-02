import { Component, ViewChild } from '@angular/core';
import { AesService } from 'services/aes.service';
import { Subscription } from 'rxjs';

// material
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'aes-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string;
  titleSubscription: Subscription;
  userMenuState: boolean = false;
  @ViewChild(MatMenuTrigger) profileMenu: MatMenuTrigger;

  constructor(private aes: AesService) {
    this.titleSubscription = this.aes.getPortalTitle()
      .subscribe(title => this.title = `: ${title}`);
  }

  test() {
    this.aes.setPortalTitle('Death Star');
  }

}
