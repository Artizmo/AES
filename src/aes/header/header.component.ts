import { Component, OnInit } from '@angular/core';
import { AesService } from '../../services/aes.service';
import { Subscriber, Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'aes-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string;
  titleSubscription: Subscription;
  constructor(private aes: AesService) {
    this.titleSubscription = this.aes.getPortalTitle()
      .subscribe(title => this.title = `: ${title}`);
  }

  ngOnInit() {

  }

  test() {
    this.aes.setPortalTitle('Death Star');
  }

}
