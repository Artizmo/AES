// angular modules
import { Component, OnDestroy } from '@angular/core';

// services
import { AppService } from 'services/app.service';

interface App {
  UUID: string,
  title: string,
  path: string
}

let app: App = {
  UUID: 'ESNHASH',
  title: 'ESN™ Gas & Power',
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
