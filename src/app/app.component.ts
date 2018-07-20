import { Component } from '@angular/core';
import { AesService } from 'services/aes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private aes: AesService) { }

  random() {
    const r = Math.floor(Math.random() * 6 );
    const arr = ['Boba Fett', 'IG-88', 'Dengar', 'Grand Moff Tarkin', 'Admiral Akbar', 'Yoda', 'Luke Skywalker']
    this.aes.setPortalTitle(arr[r]);
  }
}
