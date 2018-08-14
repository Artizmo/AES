// modules
import { Component } from '@angular/core';

// services
import { AppService } from 'services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  title: string;
  constructor(private appService: AppService) {
    appService.currentApplication$.subscribe(app => this.title = app.title);
  }

}
