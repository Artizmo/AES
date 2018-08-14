// angular modules
import { Component } from '@angular/core';

// services
import { AppService } from 'services/app.service';

interface App {
  UUID: string,
  title: string
}

let app: App = {
  UUID: 'MSGHASH',
  title: 'Message Center'
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private appService: AppService ) { 
    this.appService.load(app);
  }

}
