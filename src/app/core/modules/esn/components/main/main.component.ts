// angular modules
import { Component, OnDestroy, ComponentRef } from '@angular/core';

// services
import { AppService } from 'services/app.service';

interface App {
  UUID: string,
  title: string,
  path: string
}

let app: App = {
  UUID: 'ESNHASH',
  title: 'ESN',
  path: 'esn'
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnDestroy {
  constructor(private appService: AppService ) {
    appService.load(app);
  }

  ngOnDestroy() {
    console.log('destroying ESN component')
  }

}
